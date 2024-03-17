import mongoose from 'mongoose';

// Define the schema for the data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9_.-]+$/
      },
      password: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      itineraries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary'
      }],
      friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }]
    });


// Create the userModel to be used by database
const userModel = mongoose.model ('Users', userSchema);
// Make the model and schema available
export default userModel;