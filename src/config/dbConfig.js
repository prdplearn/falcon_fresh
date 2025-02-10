import "server-only"

import mongoose from "mongoose";

if (!process.env.MONGODB_URL) {
    throw new Error("Mongo URL not found")
}

let isConnected = null;

const connectToDatabase = async () => {

    if (isConnected) {
        console.log("=> Using existing database connection");
        return;
      }

    try {

       const db =  await mongoose.connect(process.env.MONGODB_URL,{
        dbName: "falcon_fresh_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // 30 seconds timeout
       })
       isConnected = db.connections[0].readyState;
       console.log("=> Connected to database");

    } catch (error) {
        console.error("=> Error connecting to database:", error);
        throw error;
    }
}

export default connectToDatabase