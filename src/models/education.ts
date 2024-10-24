import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    institutionName: { type: String, required: true },
    degree: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
});

export const Education = mongoose.model('Education', educationSchema);
