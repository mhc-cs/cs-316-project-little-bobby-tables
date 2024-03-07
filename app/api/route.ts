import { NextResponse } from 'next/server';
import HelloModel from './db';

// Gets all language data from the DB
export async function GET(request: Request) {
    try {
      // Query the database
      const res = await HelloModel.find({});
      
      // Log the result to the console for debugging
      console.log('Database result:', res);
  
      // Return the result as JSON
      return NextResponse.json(res || {});
    } catch (error) {
      console.error('Error querying the database:', error);
      return NextResponse.error();
    }
  }
