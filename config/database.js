import express from "express"
import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("Connected to database!");
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1); 
    }
}

export default connectDB;