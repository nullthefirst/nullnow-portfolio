require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.acw5kbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
      {
        useNewUrlParser: true,
      }
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
