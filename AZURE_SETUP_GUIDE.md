# 🚀 Azure Backend Setup Guide for Takt Website

## Overview
This guide walks you through setting up the Azure backend for your Takt website email signup form.

## Architecture
```
Frontend Form → Azure Function → Azure Table Storage
```

---

## Step 1: Create Azure Storage Account

1. **Go to Azure Portal** → Storage Accounts → Create
2. **Configuration:**
   - **Subscription:** Your subscription
   - **Resource Group:** Same as your Static Web App
   - **Storage Account Name:** `taktwebsitestorage` (must be globally unique)
   - **Region:** Same as your web app (e.g., East US)
   - **Performance:** Standard
   - **Redundancy:** LRS (Locally Redundant Storage)
3. **Create** and wait for deployment

## Step 2: Set Up Table Storage

1. **Navigate to your Storage Account** → Tables
2. **Create Table:**
   - **Table Name:** `EmailSignups`
   - Click **Create**
3. **Note the Connection String:**
   - Go to **Access Keys** in your storage account
   - Copy **Connection String** (you'll need this later)

---

## Step 3: Create Azure Function App

1. **Go to Azure Portal** → Function Apps → Create
2. **Configuration:**
   - **Subscription:** Your subscription
   - **Resource Group:** Same as storage account
   - **Function App Name:** `takt-email-functions` (must be globally unique)
   - **Runtime Stack:** Node.js
   - **Version:** 18 LTS or 20 LTS
   - **Region:** Same as storage account
   - **Plan:** Consumption (Serverless)
3. **Create** and wait for deployment

## Step 4: Configure Function App Settings

1. **Navigate to your Function App** → Configuration
2. **Add Application Setting:**
   - **Name:** `AZURE_STORAGE_CONNECTION_STRING`
   - **Value:** [Paste the connection string from Step 2]
   - Click **Save**

---

## Step 5: Create the HTTP Function

1. **In your Function App** → Functions → Create
2. **Configuration:**
   - **Development Environment:** Develop in portal
   - **Template:** HTTP trigger
   - **Function Name:** `SubmitEmailSignup`
   - **Authorization Level:** Anonymous
3. **Create**

## Step 6: Add Function Code

1. **In your new function** → Code + Test
2. **Replace the default code** with the contents of `azure-function-code.js`
3. **Save** the function

## Step 7: Install Dependencies

1. **In Function App** → Console (under Development Tools)
2. **Navigate to function folder:**
   ```bash
   cd site/wwwroot/SubmitEmailSignup
   ```
3. **Create package.json** with contents from `azure-function-package.json`
4. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Step 8: Update Frontend Configuration

1. **Get your Function URL:**
   - In your function → Get Function URL → Copy
   - Should look like: `https://takt-email-functions.azurewebsites.net/api/SubmitEmailSignup`

2. **Update CallToAction.jsx:**
   - Replace `https://your-function-app.azurewebsites.net/api/SubmitEmailSignup`
   - With your actual function URL

---

## Step 9: Configure CORS

1. **In Function App** → CORS
2. **Add Allowed Origins:**
   - `https://taktconnect.com` (your production domain)
   - `http://localhost:5173` (for development)
3. **Save**

---

## Step 10: Test the Integration

1. **Deploy your updated frontend code**
2. **Test the form submission:**
   - Fill out the form on your website
   - Check if you get the success message
   - Verify data appears in Azure Table Storage

---

## Monitoring & Troubleshooting

### Check Function Logs
1. **Function App** → Functions → SubmitEmailSignup → Monitor
2. **View recent invocations and logs**

### Check Table Storage Data
1. **Storage Account** → Tables → EmailSignups
2. **View stored email signups**

### Common Issues
- **CORS errors:** Make sure your domain is added to CORS settings
- **Connection string errors:** Verify the storage connection string is correct
- **Function not found:** Check the function URL and name

---

## Cost Estimates (Monthly)

- **Azure Functions:** $0-5 (1M free executions)
- **Table Storage:** $1-3 (per GB stored)
- **Total:** ~$1-8/month

---

## Security Notes

- Function uses Anonymous auth for public form access
- Input validation prevents malicious data
- Rate limiting can be added if needed
- CORS restricts requests to your domain only

---

## Next Steps

Once everything is working:
1. Set up monitoring alerts
2. Consider adding email confirmations
3. Plan for GDPR compliance if needed
4. Set up backup/export for email data
