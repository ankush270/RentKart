import Mongoose from "mongoose"
import mongoose from "mongoose";

const ListingSchema= new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image:[String],
    category:{
        type:String,
        required:true
    },
    pricePerDay:{
        type:Number,
        required:true
    },
    pricePerHour:{
        type:Number,
        required:true,
    },
    availability:[{date:Date,available:Boolean}],
    condition:{
        type:String,
        enum:['New' , 'Gently Used' , 'Used'],
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
},{timestamps:true});

export  default mongoose.model("Listing",ListingSchema);
