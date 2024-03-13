// Import necessary modules and types
import { NextRequest, NextResponse } from 'next/server';
import userModel from './userModel';

// Define the function to handle adding friends
export async function addFriends(request: NextRequest) {
    try {
        // Extract username and friendUsername from request body
        const { username, friendUsername } = request.body as { username: string; friendUsername: string };

        // Check if the user exists
        const user = await userModel.findOne({ username });
        if (!user) {
            return NextResponse.error(new Error('User not found'), { status: 404 });
        }

        // Check if the friend exists
        const friend = await userModel.findOne({ username: friendUsername });
        if (!friend) {
            return NextResponse.error(new Error('Friend not found'), { status: 404 });
        }

        // Add friend to user's friend list
        user.friends.push(friend._id);
        await user.save();

        // Add user to friend's friend list
        friend.friends.push(user._id);
        await friend.save();

        // Return success response
        return NextResponse.json({ message: 'Friends added successfully' });
    } catch (error) {
        console.error('Error adding friends:', error);
        return NextResponse.error();
    }
}