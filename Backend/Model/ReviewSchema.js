import mongoose from 'mongoose'

const ReviewSchema=new mongoose.Schema({
    reviewer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Listing',
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    comment:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

export default mongoose.model("Review",ReviewSchema);