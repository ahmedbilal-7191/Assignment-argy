import User from "../models/user.model.js"
export const login = async (req, res) => {
    const { healthcareId, mobileNumber } = req.body;
    try {
      
        const user = await User.findOne({ $or: [{ healthcareId }, { mobileNumber }] });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Logged in successfully", user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const signup = async (req, res) => {
    const {
        aadharNumber,
        drivingLicenseNumber,
        mobileNumber,
        email,
        dob,
        district,
        subDistrict,
        role,
        category,
        subCategory,
        healthcareId,
        password
    } = req.body;

    try {
      
        const newUser = new User({
            aadharNumber,
            drivingLicenseNumber,
            mobileNumber,
            email,
            dob,
            district,
            subDistrict,
            role,
            category,
            subCategory,
            healthcareId
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully", newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}