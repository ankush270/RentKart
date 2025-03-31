import mongoose from "mongoose";

const EcoRewardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    activities: [{ type: String }],
    createdAt: {
        type: Date,
        default: Date.now
    }
},{timestamps:true});
export default mongoose.model("EcoReward",EcoRewardSchema);