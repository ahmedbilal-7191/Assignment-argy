import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    healthcareId: {
        type: String,
        unique: true,
        sparse: true 
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    subDistrict: String,
    role: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        unique: true,
        sparse: true 
    },
    drivingLicenseNumber: {
        type: String,
        unique: true,
        sparse: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;
