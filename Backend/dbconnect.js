import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoURI=process.env.MONGO_URI;
const connectDB = async() =>{
    try{
       await mongoose.connect(mongoURI);
       console.log("mongoDB is connect")
    }catch(e){
        console.log("there is an error : " , e);
    }
}

export default connectDB;