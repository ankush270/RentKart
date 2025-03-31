import mongoose from 'mongoose'

const DisputeSchema=new mongoose.Schema({
    booking:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Booking',
        required:true
    },
    raisedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    reason:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Open', 'Resolved', 'Rejected'],
        default:'Open'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true});

export default mongoose.model('Dispute',DisputeSchema);