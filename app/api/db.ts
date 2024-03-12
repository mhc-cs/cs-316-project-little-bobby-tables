import mongoose from 'mongoose';
// Connect to the database
mongoose.connect(process.env.MONGODB_URI!, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define the schema for the data
const testSchema = new mongoose.Schema({
 name: String,
 age: Number
}, { collection: 'people' });
// Create a model. This is what provides the nice API to
// manipulate the database.
const testModel = mongoose.model ('people', testSchema);
// Make the model and schema available
export default testModel;
