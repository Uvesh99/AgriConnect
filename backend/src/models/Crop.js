import mongoose from 'mongoose';

const CropSchema = new mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cropName: {
        type: String,
        required: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    harvestingDate: {
        type: Date,
        required: true
    },
    harvestingMethod: {
        type: String,
        enum: ['Manual', 'Machine', 'Hybrid'],
        required: true
    },
    cropPhase: {
        type: String,
        enum: ['Initial', 'Vegetative', 'Flowering', 'Maturity', 'Harvested'],
        default: 'Initial'
    },
    acres: {
        type: Number,
        required: true
    },
    expectedQuantity: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        default: ''
    }
}, { timestamps: true });

export default mongoose.model('Crop', CropSchema);