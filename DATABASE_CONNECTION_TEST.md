# Database Connection Test Instructions

This document provides step-by-step instructions for testing the MongoDB database connection in the Stock App project.

## Prerequisites

- Node.js and npm installed on your machine
- Access to the project repository
- MongoDB Atlas account credentials (already configured in the .env file)

## Testing the Database Connection

### Method 1: Using the Test Script

1. **Navigate to the project directory**
   ```bash
   cd /path/to/stockapp
   ```

2. **Run the test script**
   ```bash
   npx ts-node -r dotenv/config test-db-connection.ts
   ```

   If you see the message "Connection successful!", your database connection is working properly.

### Method 2: Manual Testing

If you want to test the connection manually, follow these steps:

1. **Open a Node.js REPL in the project directory**
   ```bash
   node
   ```

2. **Load environment variables and connect to the database**
   ```javascript
   require('dotenv').config();
   const mongoose = require('mongoose');
   
   async function testConnection() {
     try {
       await mongoose.connect(process.env.MONGODB_URI);
       console.log('Connection successful!');
     } catch (error) {
       console.error('Connection failed:', error.message);
     } finally {
       await mongoose.disconnect();
     }
   }
   
   testConnection();
   ```

## Troubleshooting

If you encounter any issues with the database connection, check the following:

1. **Environment Variables**
   - Make sure the `.env` file exists in the project root
   - Verify that `MONGODB_URI` is correctly set in the `.env` file

2. **Network Connectivity**
   - Ensure you have internet connectivity
   - Check if your network allows connections to MongoDB Atlas (port 27017)

3. **MongoDB Atlas Configuration**
   - Verify that your IP address is whitelisted in MongoDB Atlas
   - Check if the database user has the correct permissions

## Connection Details

The current MongoDB connection string is:
```
mongodb+srv://OliverPaxley:t7CH5HMpTC0NjidU@cluster0.2amt1cl.mongodb.net/?appName=Cluster0
```

This connects to a MongoDB Atlas cluster with the following details:
- Username: OliverPaxley
- Cluster: cluster0.2amt1cl.mongodb.net