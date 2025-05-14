import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        enum: ['text', 'image', 'video', 'audio'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    platformSpecificData: {
        type: Map,
        of: String,
    },
});

const Content = mongoose.model('Content', contentSchema);

export default Content;