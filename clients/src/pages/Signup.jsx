import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import RegistrationForm from "../pages/RegistrationForm"
const Signup = () => {
    const [loginOption, setLoginOption] = useState("aadhar");
    const [aadharNumber, setAadharNumber] = useState("");
    const [mobileNumber, setmobileNumber] = useState("");
    const [drivingLicenseNumber, setdrivingLicenseNumber] = useState("");//driving license
    const [submitted, setSubmitted] = useState(false);
    const [finotp, setfinotp] = useState(false);
    const [language, setLanguage] = useState("english");
    const [agreed, setAgreed] = useState(false);
    const [otp, setOtp] = useState('');

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    const handleCheckboxChange = () => {
        setAgreed(!agreed);
    };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (agreed) {
    //       // Add your form submission logic here
    //       console.log("Form submitted successfully");
    //     } else {
    //       alert("Please agree to the terms and conditions");
    //     }
    //   };



    const handleLoginOptionChange = (option) => {
        setLoginOption(option);
    };

    const handleAadharNumberChange = (e) => {
        setAadharNumber(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setmobileNumber(e.target.value);
    };

    const handleDrivinglisenceChange = (e) => {
        setdrivingLicenseNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your login logic
        console.log("Login submitted");
        console.log("Aadhar Number:", aadharNumber);
        console.log("drivinglicense Number:", drivingLicenseNumber);
        setSubmitted(true);
    };
    const handleOTP = () => {
        setfinotp(true);
    }
    return (
        <>
            {finotp ? <RegistrationForm aadharNumber={aadharNumber} mobileNumber={mobileNumber} /> : (<div className='bg-white p-5 items-center justify-center w-1/2 m-auto mt-5  shadow-2xl'>
                <p className='text-xl font-bold my-2'>Create your HealthCare professional ID</p>
                <p className='my-2'>The HealthCare Professional ID Will Connect You to Indias Digital Health ecosysytem</p>

                <p className='my-2'>Generate HealthCare ID via</p>
                <div
                    className={`rounded-lg border ${loginOption === "aadhar" ? "bg-orange-400" : "bg-gray-100"
                        } p-4 inline-block cursor-pointer mr-4`}
                    onClick={() => handleLoginOptionChange("aadhar")}
                >
                    Aadhaar
                </div>
                <div
                    className={`rounded-lg border ${loginOption === "drivinglicense" ? "bg-orange-400" : "bg-gray-100"
                        } p-4 inline-block cursor-pointer`}
                    onClick={() => handleLoginOptionChange("drivinglicense")}
                >
                    Driving License
                </div>

                <form onSubmit={handleSubmit}>
                    {loginOption === "aadhar" ? (
                        <div >
                            <div>
                                <p>Enter your Aadhaar Number</p>
                                <input
                                    type="text"
                                    placeholder="Enter Aadhar Number"
                                    value={aadharNumber}
                                    onChange={handleAadharNumberChange}
                                    required
                                    className="block w-full border rounded p-2 my-4 border-solid border-black"
                                />
                            </div>

                            <div>
                            <p>Enter your Mobile Number</p>
                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                    required
                                    className="block w-full border rounded p-2 my-4 border-solid border-black"
                                />
                            </div>
                        </div>


                    ) : (
                        <input
                            type="text"
                            placeholder="Enter drivinglicense Number"
                            required
                            value={drivingLicenseNumber}
                            onChange={handleDrivinglisenceChange}
                            className="block w-full border rounded p-2 my-4"
                        />
                    )}





                    <div className="mb-4">
                        <div
                            className={`rounded-lg border ${language === "english" ? "bg-orange-400" : "bg-gray-100"
                                } p-4 inline-block cursor-pointer mr-4`}
                            onClick={() => handleLanguageChange("english")}
                        >
                            English
                        </div>
                        <div
                            className={`rounded-lg border ${language === "hindi" ? "bg-orange-400" : "bg-gray-100"
                                } p-4 inline-block cursor-pointer`}
                            onClick={() => handleLanguageChange("hindi")}
                        >
                            हिन्दी
                        </div>
                    </div>


                    <div
                        className="border rounded h-32 overflow-y-auto p-4 mb-4"
                        style={{ maxHeight: "100px" }}
                    >
                        {language === "english" ? (
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                vitae posuere ipsum. Sed aliquam interdum libero, nec eleifend
                                urna. Mauris eleifend, justo a lacinia posuere, felis metus
                                dictum nisi, nec lacinia eros eros a erat. Ut auctor quam ac
                                tortor fringilla aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                vitae posuere ipsum. Sed aliquam interdum libero, nec eleifend
                                urna. Mauris eleifend, justo a lacinia posuere, felis metus
                                dictum nisi, nec lacinia eros eros a erat. Ut auctor quam ac
                                tortor fringilla aliquet.
                            </p>
                        ) : (
                            <p>
                                लोरेम इप्सम डोलर सिट अमेट, अनलथी प्रयसोर केर्तीटिंग एलिट्।
                                नुल्लम विटाए पोसुरे इप्सुम। सेद अलिक्युम इन्टेरदुम लिबेरो, नेक
                                एलेफेन्ड उर्ना। मौरिस एलेफेन्ड, जुस्तो अ लाचिनिया पोसुरे, फेलिस
                                मेतुस डिक्टुम निसि, नेक लाचिनिया एरोस एरोस अ एरत। उत अउक्तोर क्वाम
                                अक तोर्तोर फ्रिन्गिल्ला अलिक्वेट।लोरेम इप्सम डोलर सिट अमेट, अनलथी प्रयसोर केर्तीटिंग एलिट्।
                                नुल्लम विटाए पोसुरे इप्सुम। सेद अलिक्युम इन्टेरदुम लिबेरो, नेक
                                एलेफेन्ड उर्ना। मौरिस एलेफेन्ड, जुस्तो अ लाचिनिया पोसुरे, फेलिस
                                मेतुस डिक्टुम निसि, नेक लाचिनिया एरोस एरोस अ एरत। उत अउक्तोर क्वाम
                                अक तोर्तोर फ्रिन्गिल्ला अलिक्वेट।
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-blue-600"

                            />
                            <span className="ml-2">I agree to the terms and conditions</span>
                        </label>
                    </div>


                    <div className='flex justify-between'>
                        <button
                            type=""
                            disabled={!agreed}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400  "
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            disabled={!agreed}
                            onClick={handleSubmit}
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 me-4 "
                        >
                            Submit
                        </button>

                    </div>

                </form>

                {/* otp */}
                {submitted && (
                    <form className="space-y-4">
                        <div className='my-2'>
                            <label htmlFor="otp" className="block mb-1">Enter OTP :</label>
                            <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={handleOtpChange}
                                maxLength={6}
                                minLength={6}
                                required
                                className="w-full border mt-2 border-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-blue-600" onClick={handleOTP}>Verify OTP</button>
                    </form>
                )}

                {/* {finotp&&(<RegistrationForm/>)} */}

            </div>)}

        </>
    )
}

export default Signup
