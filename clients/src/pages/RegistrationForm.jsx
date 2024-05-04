import React from 'react'
import Container from '../components/Container'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({aadharNumber,mobileNumber}) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        aadharNumber:aadharNumber,
        mobileNumber: '',
        email: '',
        dob: '',
        district: '',
        subDistrict: '',
        role: '',
        category: '',
        subCategory: '',
        healthcareId: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        // Update mobileNumber field when aadharNumber prop changes
        setFormData(prevState => ({
            ...prevState,
            mobileNumber: mobileNumber
        }));
    }, [aadharNumber, mobileNumber]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Here you can send formData to backend
        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User created successfully:', data);
                navigate('/success')
                // Here you can handle success, like showing a success message or redirecting the user
            } else {
                console.error('Failed to create user:', response.statusText);
                // Handle error, like showing an error message to the user
            }
        } catch (error) {
            console.error('Error creating user:', error);
            // Handle error, like showing an error message to the user
        }
        console.log(formData);
    };

    const handleReset = () => {
        setFormData({
            mobileNumber: '',
            email: '',
            dob: '',
            district: '',
            subDistrict: '',
            role: '',
            category: '',
            subCategory: '',
            healthcareId: '',
            password: '',
            confirmPassword: ''
        });
    };



    return (
        <>
            <Container>
                <div className='items-center justify-center w-full m-auto mt-5 shadow-2xl p-3 bg-white'>
                    <p className='bg-blue-700 p-3  rounded-m'>Registration Form (Mobile Verificaton is requiredd)</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="mobileNumber" className="block mb-1">Mobile Number:</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="dob" className="block mb-1">Date of Birth:</label>
                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            

                        </div> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">



                            <div>
                                <label htmlFor="district" className="block mb-1">District:</label>
                                <select
                                    id="district"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select District</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    {/* Add district options here */}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="subDistrict" className="block mb-1">Sub District:</label>
                                <select
                                    id="subDistrict"
                                    name="subDistrict"
                                    value={formData.subDistrict}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select subDistrict</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Vishakhapatnam">Vishakhapatnam</option>
                                    <option value="Mumbai">Mumbai</option>
                                    {/* Add sub district options here */}
                                </select>
                            </div>

                            <div className="col-span-2">
                                <label className="block mb-1">Role:</label>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="I am a healthcare professional"
                                            checked={formData.role === 'I am a healthcare professional'}
                                            onChange={handleChange}
                                            required
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2">I am a healthcare professional</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="iam a facility manager/Administration"
                                            checked={formData.role === 'iam a facility manager/Administration'}
                                            onChange={handleChange}
                                            required
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2">iam a facility manager/Administration</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="i am healthcare manager and facility manager"
                                            checked={formData.role === 'i am healthcare manager and facility manager'}
                                            onChange={handleChange}
                                            required
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2">i am healthcare manager and facility manager</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="category" className="block mb-1">Category:</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Practitioner">Practitioner</option>
                                    <option value="Facility Manager">Facility Manager</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="subCategory" className="block mb-1">Sub Category:</label>
                                <select
                                    id="subCategory"
                                    name="subCategory"
                                    value={formData.subCategory}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select Sub Category</option>
                                    <option value="Modern Medicine">Modern Medicine</option>
                                    <option value="Old medicine">Old medicine</option>
                                    <option value="Medicine">Medicine</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="healthcareId" className="block mb-1">Healthcare ID/Username:</label>
                                <input
                                    type="text"
                                    id="healthcareId"
                                    name="healthcareId"
                                    value={formData.healthcareId}
                                    onChange={handleChange}
                                    placeholder='@hpr.abdm'
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-1">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                            <button type="button" onClick={handleReset} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400 ml-4">Reset</button>
                        </div>
                    </form>

                </div>
            </Container>
        </>
    )
}

export default RegistrationForm
