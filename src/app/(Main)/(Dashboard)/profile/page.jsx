import AccountSidebar from '@/components/AccountSidebar'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const Profile = () => {
  return (
    <>
       <Wrapper>
                <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto py-6">
                 
                    <div className="flex flex-col md:flex-row gap-4 ">

                        <div className='w-56'>
                            <AccountSidebar />
                        </div>


                        <div className="flex-1 overflow-hidden rounded-xl  p-6">
                            <div className="pt-4">
                                <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
                                <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                            <hr className="mt-4 mb-8" />
                            <p className="py-2 text-xl font-semibold">Email Address</p>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <label htmlFor="Email">
                                    <span className="text-sm text-gray-500">Enter New Email</span>
                                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-pink-600">
                                        <input type="text" id="email" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" />
                                    </div>
                                </label>
                                <button className="inline-flex text-sm font-semibold text-pink-600 underline decoration-2">Change</button>
                            </div>
                            <hr className="mt-4 mb-8" />
                            <p className="py-2 text-xl font-semibold">Password</p>
                            <div className="flex items-center">
                                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                                    <label htmlFor="login-password">
                                        <span className="text-sm text-gray-500">Current Password</span>
                                        <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-pink-600">
                                            <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                                        </div>
                                    </label>
                                    <label htmlFor="login-password">
                                        <span className="text-sm text-gray-500">New Password</span>
                                        <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-pink-600">
                                            <input type="password" id="login-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                                        </div>
                                    </label>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            </div>
                            <p className="mt-2">Can't remember your current password. <a className="text-sm font-semibold text-pink-600 underline decoration-2" href="#">Recover Account</a></p>
                            <button className="mt-4 rounded-lg bg-pink-600 px-4 py-2 text-white">Save Password</button>
                            <hr className="mt-4 mb-8" />

                            <div className="mb-10">
                                <p className="py-2 text-xl font-semibold">Delete Account</p>
                                <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Proceed with caution
                                </p>
                                <p className="mt-2">Make sure you have taken backup of your account in case you ever need to get access to your data. We will completely wipe your data. There is no way to access your account after this action.</p>
                                <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">Continue with deletion</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
    </>
  )
}

export default Profile
