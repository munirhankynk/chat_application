import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}