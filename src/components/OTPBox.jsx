"use client"

import React, { useState } from "react";

const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([
            ...otp.map((d, idx) => (idx === index ? element.value : d)),
        ]);

        // Move to the next input box
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 6 || enteredOtp.includes("")) {
            setErrorMessage("Please enter all six digits.");
        } else {
            setErrorMessage("");
            console.log("OTP Submitted:", enteredOtp);
            alert("OTP Verified!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[50vh] ">
            <div className="bg-white">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    OTP Verification
                </h2>
                <p className="text-sm text-gray-500 mb-6 text-center">
                    Enter the 6-digit code sent to your email or phone.
                </p>
                <p className="text-sm text-pink-400 mb-6 text-center rounded-md p-3 bg-pink-50">
                    Email sent to <span className="font-bold font-orange">prdp@syna.com</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between mb-4">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                id={`otp_input-${index}`}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                                className="w-12 h-12 text-center text-xl border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        ))}
                    </div>
                    {errorMessage && (
                        <p className="text-sm text-red-500 mb-2 text-center">
                            {errorMessage}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OTPBox;
