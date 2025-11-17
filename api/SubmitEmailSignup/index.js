const { TableClient } = require("@azure/data-tables");
const { v4: uuidv4 } = require('uuid');
const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    // Set CORS headers
    context.res = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json"
        }
    };

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        context.res.status = 200;
        return;
    }

    // Only allow POST requests
    if (req.method !== "POST") {
        context.res.status = 405;
        context.res.body = { error: "Method not allowed" };
        return;
    }

    try {
        context.log('Starting function execution...');
        
        // Validate request body
        const { email, companyName, dataSystems } = req.body;
        context.log('Extracted fields:', { email, companyName, dataSystems });
        
        if (!email || !companyName || !dataSystems) {
            context.res.status = 400;
            context.res.body = { 
                error: "Email, company name, and data systems information are required" 
            };
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            context.res.status = 400;
            context.res.body = { 
                error: "Invalid email format" 
            };
            return;
        }

        // Connect to Azure Table Storage
        const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
        if (!connectionString) {
            context.log.error('AZURE_STORAGE_CONNECTION_STRING not found in environment variables');
            context.res.status = 500;
            context.res.body = { error: "Server configuration error." };
            return;
        }

        const tableClient = TableClient.fromConnectionString(connectionString, "EmailSignups");

        // Create entity for table storage
        const entity = {
            partitionKey: "emailSignup",
            rowKey: uuidv4(),
            email: email.toLowerCase().trim(),
            companyName: companyName.trim(),
            dataSystems: dataSystems.trim(),
            timestamp: new Date().toISOString(),
            source: "TaktWebsite",
            ipAddress: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown'
        };

        context.log('Creating entity:', entity);
        await tableClient.createEntity(entity);
        context.log('Entity created successfully');

        // Send admin notification email
        try {
            context.log('Attempting to send admin notification...');
            await sendAdminNotification(email, companyName, dataSystems, entity.timestamp, context);
            context.log('Admin notification sent successfully');
        } catch (emailError) {
            context.log.error(`Failed to send admin notification: ${emailError.message}`);
            // Don't fail the signup if email notification fails
        }

        // Return success response
        context.res.status = 200;
        context.res.body = {
            success: true,
            message: "Thanks for your interest, you will hear from us soon."
        };

    } catch (error) {
        context.log.error(`Email signup error: ${error.message}`);
        context.res.status = 500;
        context.res.body = {
            success: false,
            error: "An error occurred while processing your request. Please try again."
        };
    }
};

/**
 * Send admin notification email when a new signup occurs
 */
async function sendAdminNotification(userEmail, companyName, dataSystems, timestamp, context) {
    const communicationConnectionString = process.env.AZURE_COMMUNICATION_CONNECTION_STRING;
    
    if (!communicationConnectionString) {
        throw new Error('AZURE_COMMUNICATION_CONNECTION_STRING not found in environment variables');
    }

    const emailClient = new EmailClient(communicationConnectionString);
    
    // Admin email addresses
    const adminEmails = [
        "wzunker@taktconnect.com",
        "araghavan@taktconnect.com", 
        "taktconnect@gmail.com"
    ];

    // Format timestamp for better readability
    const formattedTime = new Date(timestamp).toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    const emailMessage = {
        senderAddress: "donotreply@b6b51df1-822e-4728-ac9a-9c3d512ee4d5.azurecomm.net",
        content: {
            subject: "🎉 New Takt Website Signup",
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #E16809, #CC7A00); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">New Website Signup!</h1>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #E16809;">
                        <h2 style="color: #3E553C; margin-top: 0;">Contact Details</h2>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${userEmail}</p>
                        <p style="margin: 10px 0;"><strong>Company:</strong> ${companyName}</p>
                        <p style="margin: 10px 0;"><strong>Data Systems:</strong> ${dataSystems}</p>
                        <p style="margin: 10px 0;"><strong>Signup Time:</strong> ${formattedTime}</p>
                        <p style="margin: 10px 0;"><strong>Source:</strong> Takt Website</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
                        <p style="margin: 0; color: #3E553C;"><strong>Next Steps:</strong> Consider reaching out to this potential customer to discuss their manufacturing AI needs!</p>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
                        <p>This is an automated notification from your Takt website contact form.</p>
                    </div>
                </div>
            `
        },
        recipients: {
            to: adminEmails.map(email => ({ address: email }))
        }
    };

    context.log(`Sending admin notification to: ${adminEmails.join(', ')}`);
    
    const poller = await emailClient.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    
    context.log(`Email notification sent with ID: ${result.id}`);
    return result;
}
