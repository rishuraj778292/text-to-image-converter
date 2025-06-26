// import mongoose from "mongoose";

// const connectDB = async () => {
//     await mongoose.connect(process.env.MONGODB_URI)
    
//     mongoose.connection.on('connected', () => {
//         console.log("database connected");

//     })
//     mongoose.connection.on('error', (error) => {
//         console.log("database connection error", error);

//     })
// }

// export default connectDB

// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on('connected', () => {
      console.log(" MongoDB connected successfully");
    });

    mongoose.connection.on('error', (err) => {
      console.error("MongoDB connection error:", err);
    });

  } catch (error) {
    console.error(" Initial DB connection error:", error);
    process.exit(1); // exit if failed at start
  }
};

export default connectDB;
