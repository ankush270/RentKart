import mongoose from "mongoose"

const PaymentSchema= new mongoose.Schema({
    renter:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Booking',
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    paymentMethod:{
        type:String,
        enum:['Credit Card', 'Paypal','crypto'],
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Completed','Failed'],
        default:'Pending'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

export default mongoose.model("Payment",PaymentSchema);