import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import testModel from './db';
import HelloModel from './helloModel';


// Gets all language data from the DB
export async function GET(request: Request) {
  try {
    console.log('Before query');

    // Query the database
    const testData = await testModel.find({});
    
    // Log the result to the console for debugging
    console.log('API Route: After query, result:', testData);

    const helloData = await HelloModel.find({});
    console.log('Data from messages collection:', helloData);

    const combinedData = {
        testData,
        helloData
    };
    // Return the result as JSON
    return NextResponse.json(combinedData || []);
  } catch (error) {
    console.error('Error querying the database:', error); // Log the specific error
    return NextResponse.error();
  }
}
