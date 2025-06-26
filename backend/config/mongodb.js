import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/imgg`)
    
    mongoose.connection.on('connected', () => {
        console.log("database connected");

    })
    mongoose.connection.on('error', (error) => {
        console.log("database connection error", error);

    })
}

export default connectDB