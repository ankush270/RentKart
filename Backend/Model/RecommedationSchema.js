import mongoose from 'mongoose'

const RecommedationSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    recommendedListing:[{type:mongoose.Schema.Types.ObjectId, ref:'Listing'}],
    createdAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

export default mongoose.model('Recommendation',RecommedationSchema);