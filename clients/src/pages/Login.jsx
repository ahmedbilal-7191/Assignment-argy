import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    const [loginOption, setLoginOption] = useState("username");
    const [healthcareId, setHealthcareId] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const handleLoginOptionChange = (option) => {
        setLoginOption(option);
    };

    const handlehealthcareIdChange = (e) => {
        setHealthcareId(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (loginOption === "username") {
                response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ healthcareId })
                });
            } else {
                response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mobileNumber })
                });
            }

            if (response.ok) {
                // Redirect to success page or perform further actions
                window.location.href = '/loginsucess';
            } else {
                const data = await response.json();
                alert(data.message); // Display error message
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred. Please try again later.');
        }
        // Here you can add your login logic
        // console.log("Login submitted");
        console.log("Aadhar health Number:", healthcareId);
        console.log("Mobile Number:", mobileNumber);
    };
    return (
        <>
            <div className=' items-center justify-center w-2/4 m-auto mt-5 p-4 shadow-2xl bg-white'>
                <p className='text-xl font-bold'>LogIn to National healthcare provider Registry</p>
                <div className='my-2'>
                    <small>Login Via</small>
                </div>

                <div
                    className={`rounded-lg border ${loginOption === "username" ? "bg-orange-300" : "bg-gray-100"
                        } p-4 inline-block cursor-pointer mr-4`}
                    onClick={() => handleLoginOptionChange("username")}
                >
                    Healthcare Professional ID/Username
                </div>
                <div
                    className={`rounded-lg border ${loginOption === "mobile" ? "bg-orange-300" : "bg-gray-100"
                        } p-4 inline-block cursor-pointer`}
                    onClick={() => handleLoginOptionChange("mobile")}
                >
                    Mobile Number
                </div>

                <form onSubmit={handleSubmit} className='mt-2'>
                    {loginOption === "username" ? (
                        <input 
                            type="text"
                            placeholder="Enter username Number"
                            value={healthcareId}
                            required
                            onChange={handlehealthcareIdChange}
                            className="block w-1/2 border rounded p-2 my-8 border-solid border-black "
                        />
                    ) : (
                        <div>
                            <div className='my-8'>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter Mobile Number"
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                    className="block w-1/2 border rounded p-2 mb-4 border-solid border-black"
                                />
                            </div>
                            {/* <div>
                                <p>1+2=?</p>
                                <input
                                    type="text"
                                    placeholder="Enter Captcha Number"
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                    className="block w-2/3 border rounded p-2 mb-4"
                                />
                            </div> */}


                        </div>


                    )}
                    <div className='flex justify-between w-1/2'>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400 me-10"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 ms-10"
                        >
                            Login
                        </button>

                    </div>
                    <p className='my-2'>Don't Have an account? <Link to="/signup" className='font-medium text-primary  transition-all duration-200 hover:underline'>Register Here</Link></p>

                </form>

            </div>
        </>
    )
}

export default Login
