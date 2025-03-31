import mongoose from "mongoose";

const InsuranceSchema = new mongoose.Schema({
    renter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    listing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    coverageAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Expired'],
        default: 'Active' },
    createdAt: {
        type: Date,
        default: Date.now }
},{timestamps:true});

export default mongoose.model('Insurance',InsuranceSchema);