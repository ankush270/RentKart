import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
    type:String,
        required:true,
        unique: true,
    },
    password_hash:{
    type:String,
        required:true
    },
    first_name:{
    type:String,
        required:true
    },
    last_name:{
    type:String,
        required:true,
    },
    profile_picture_url: {
        type: String,
    },
    bio:{
        type: String,
    },
    verified:{
        type:Boolean,
    },
    socialLinks: {
        google: String,
        facebook: String
    },
    governmentID: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps :true,});
export default mongoose.model("User",UserSchema);