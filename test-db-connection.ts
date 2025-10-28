// Test script for MongoDB connection
import * as dotenv from 'dotenv';

// Load environment variables first, before importing any other modules
dotenv.config();

// Now import the connectToDatabase function
import { connectToDatabase } from './database/mongoose';

// Log environment variables for debugging
console.log('Environment variables:');
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('NODE_ENV:', process.env.NODE_ENV);

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await connectToDatabase();
    console.log('Connection successful!');
    process.exit(0);
  } catch (error) {
    console.error('Connection failed:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

testConnection();
