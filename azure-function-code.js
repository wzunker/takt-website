// Azure Function: SubmitEmailSignup
// HTTP Trigger function to handle Takt website form submissions

const { TableClient } = require("@azure/data-tables");

module.exports = async function (context, req) {
    // Set CORS headers
    context.res = {
        headers: {
            "Access-Control-Allow-Origin": "https://taktconnect.com", // Your domain
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
        // Validate request body
        const { email, companyName, dataSystems } = req.body;
        
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
        const tableClient = TableClient.fromConnectionString(
            connectionString, 
            "EmailSignups"
        );

        // Create entity for table storage
        const entity = {
            partitionKey: "EmailSignup",
            rowKey: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            email: email.toLowerCase().trim(),
            companyName: companyName.trim(),
            dataSystems: dataSystems.trim(),
            timestamp: new Date().toISOString(),
            source: "takt-website",
            ipAddress: req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown'
        };

        // Insert entity into table storage
        await tableClient.createEntity(entity);

        // Log success
        context.log(`Email signup successful: ${email} from ${companyName} - Data Systems: ${dataSystems}`);

        // Return success response
        context.res.status = 200;
        context.res.body = {
            success: true,
            message: "Thanks for your interest, you will hear from us soon."
        };

    } catch (error) {
        // Log error
        context.log.error(`Email signup error: ${error.message}`);

        // Return error response
        context.res.status = 500;
        context.res.body = {
            success: false,
            error: "An error occurred while processing your request. Please try again."
        };
    }
};
