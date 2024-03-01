import mongoose from "mongoose";
import fs from 'fs/promises'; // Importing file system module to read JSON file
import { reportModel } from '../models/index.js'; 
import dotenv from 'dotenv';
dotenv.config();

// Function to upload data from JSON file to MongoDB
const uploadDataFromJson = async (filePath) => {
    try {
        // Read the JSON file
        const jsonData = await fs.readFile(filePath, 'utf-8');
        
        // Parse JSON data
        const data = JSON.parse(jsonData);
        
        // Insert data into MongoDB
        await reportModel.insertMany(data);

        console.log('Data uploaded successfully from JSON file.');
    } catch (error) {
        console.error('Error uploading data from JSON file:', error);
    }
}

// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb database is connected!");
        // Provide the file path to the JSON file here
        // const filePath = 'jsondata.json'; // Change this to the actual file path
        // uploadDataFromJson(filePath);
    })
    .catch((error) => {
        console.log(error);
    });
}
