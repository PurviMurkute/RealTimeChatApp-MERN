import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log("MongoDB Connected");
    } else {
      console.log("MongoDB not connected");
    }
  } catch (error) {
    console.log("Database connection error: ", error);
  }
};

export default connectToDB;
