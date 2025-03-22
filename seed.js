// Bring in Mongoose to connect to the database
const mongoose = require('mongoose');
// Bring in the Jet model to add data
const Jet = require('./models/Jet');
// Bring in dotenv to load environment variables
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the DB_URL from .env
mongoose.connect(process.env.DB_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.log('DB connection error:', err));

// Function to add initial jet data
async function seedJets() {
  // Clear the Jet collection in the database
  await Jet.deleteMany({});
  // Add initial jets to the database
  await Jet.insertMany([
    { model: 'F-35 Lightning', productionYear: 2016, status: 'In Service' },
    { model: 'F-22 Raptor', productionYear: 2005, status: 'In Service' },
    { model: 'F-16 Fighting Falcon', productionYear: 1995, status: 'Under Maintenance' }
  ]);
  // Log a message when done
  console.log('Initial jet data seeded');
  // Close the database connection
  mongoose.connection.close();
}

// Run the seeding function
seedJets();