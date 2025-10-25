// Importing the Mongoose library, which is a popular Node.js library used for MongoDB object modeling and interacting with the MongoDB database.
const mongoose = require('mongoose');

// Setting a Mongoose option called 'strictQuery' to 'false'.
// By default, Mongoose will throw an error if you try to query the database with properties that are not defined in your schema.
// Setting 'strictQuery' to 'false' allows you to perform queries with properties that are not explicitly defined in the schema without triggering an error.
mongoose.set('strictQuery', false);

// Enhanced MongoDB connection with better error handling and options
const connectDB = async () => {
    try {
        // Connection options for better stability
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            maxPoolSize: 10, // Maintain up to 10 socket connections
        };

        // Establishing a connection to the MongoDB database
        await mongoose.connect(process.env.mongo_url, options);
        console.log('✅ MongoDB Connected Successfully!');
        console.log(`📍 Database: ${mongoose.connection.name}`);
        console.log(`🌐 Host: ${mongoose.connection.host}`);
        
    } catch (error) {
        console.log('❌ MongoDB Connection Failed!');
        console.log('🔍 Error Details:', error.message);
        
        // Provide helpful troubleshooting information
        if (error.message.includes('IP')) {
            console.log('💡 Possible Solution: Add your IP address to MongoDB Atlas whitelist');
            console.log('🔗 Atlas IP Whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/');
        }
        
        if (error.message.includes('authentication')) {
            console.log('💡 Possible Solution: Check your username and password in the connection string');
        }
        
        // Don't exit in development - allow server to run for testing
        if (process.env.NODE_ENV === 'production') {
            process.exit(1);
        } else {
            console.log('⚠️  Server continuing in development mode without database connection');
        }
    }
};

// Call the connection function
connectDB();

// Creating a variable named 'connection' and assigning it the Mongoose connection object.
const connection = mongoose.connection;

// Additional connection event handlers
connection.on('connected', () => {
    console.log('🔗 Mongoose connected to MongoDB');
});

connection.on('error', (err) => {
    console.log('❌ Mongoose connection error:', err.message);
});

connection.on('disconnected', () => {
    console.log('🔌 Mongoose disconnected from MongoDB');
});