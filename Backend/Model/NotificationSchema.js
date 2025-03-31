import mongoose from "mongoose";

const NotificationSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    type:{
        type:String,
        enum: ['Booking', 'Payment', 'Reminder', 'Dispute'],
        required:true
    },
    message:{
        type:String,
        required:true
    },
    isRead:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});
export default mongoose.model('Notification',NotificationSchema);