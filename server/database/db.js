/*
 * Title: db.js
 * Description : Database connection file
 * Author: Tanvir Hassan Joy
 * Date: 2024-07-29 11:02:49
 */

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDB;
