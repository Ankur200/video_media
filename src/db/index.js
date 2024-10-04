// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// dotenv.config();
// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`, {});
//     console.log("MongoDB connection successful");
//   } catch (error) {
//     console.error("MongoDB connection error: ", error);
//     process.exit(1); // Exit process with failure
//   }
// };
// export default connectDB;
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
