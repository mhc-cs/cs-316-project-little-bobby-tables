import mongoose from 'mongoose';

// Define the schema for the data
const helloSchema = new mongoose.Schema({
 languages: String,
 greetings: String
});
// Create a model. This is what provides the nice API to
// manipulate the database.
const HelloModel = mongoose.model ('messages', helloSchema);
// Make the model and schema available
export default HelloModel;