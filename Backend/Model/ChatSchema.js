import mongoose from 'mongoose'

const ChatSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Booking',
        required:true
    },
    message:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});
export default mongoose.model("Chat",ChatSchema)
