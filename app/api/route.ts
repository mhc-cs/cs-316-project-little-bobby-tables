import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import testModel from './db';
import userModel from './userModel';


// Gets all language data from the DB
export async function GET(request: Request) {
  try {
    console.log('Before query');

    // Query the database
    const testData = await testModel.find({});
    
    // Log the result to the console for debugging
    console.log('API Route: After query, result:', testData);

    const userData = await userModel.find({});
    console.log('Data from Users collection:', userData);

    const combinedData = {
        testData,
        userData
    };
    // Return the result as JSON
    return NextResponse.json(combinedData || []);
  } catch (error) {
    console.error('Error querying the database:', error); // Log the specific error
    return NextResponse.error();
  }
}
