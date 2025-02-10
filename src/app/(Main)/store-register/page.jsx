"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const StoreRegisterPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [storeName, setStoreName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        // Validate password match
        if (password !== cpassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            console.log("Registering:", { email, password, storeName, city, address, phone });

            // Send request to API
            let response = await fetch("http://localhost:3000/api/restaurant", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, storeName, city, address, phone }),
            });

            // Check if response is successful before parsing JSON
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            console.log("Server Response:", data);

            if (data.success) {
                localStorage.setItem("RestaurentRegister", JSON.stringify(data));
                console.log("Stored in localStorage:", data);
                router.push("/profile");
            } else {
                console.error("Registration failed:", data.error);
                alert("Registration failed: " + (data.error || "Please try again"));
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong! Please try again.");
        }
    };


    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Store</h2>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="store_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Enter Store Name
                                </label>
                                <input type="text" name="storeName" id="store_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Grocery store" required value={storeName} onChange={(e) => setStoreName(e.target.value)} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="cpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm Password
                                </label>
                                <input type="password" name="cpassword" id="cpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="****" required value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="cityName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Enter City
                                </label>
                                <input type="text" name="cityName" id="cityName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Noida" required value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Enter Phone
                                </label>
                                <input type="tel" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="8974561" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your Address
                                </label>
                                <textarea id="address" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Address here" name="address" required value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-black text-white rounded-lg hover:bg-gray-800">
                            Register
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default StoreRegisterPage;
