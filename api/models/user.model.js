import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    healthcareId: {
        type: String,
        unique: true,
        sparse: true // Allows null or empty values for this field
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
        sparse: true // Allows null or empty values for this field
    },
    drivingLicenseNumber: {
        type: String,
        unique: true,
        sparse: true // Allows null or empty values for this field
    }
});

const User = mongoose.model('User', userSchema);

export default User;
