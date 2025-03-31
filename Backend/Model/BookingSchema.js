import mongoose from "mongoose";

const BookingSchema=new mongoose.Schema({
    renter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    listing:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Listing',
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Confirmed','Completed','Cancelled'],
        default:'Pending'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

export default mongoose.model('Booking',BookingSchema);