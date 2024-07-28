import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
