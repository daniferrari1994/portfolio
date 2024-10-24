import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String, required: true },
});

export const Experience = mongoose.model('Experience', experienceSchema);
