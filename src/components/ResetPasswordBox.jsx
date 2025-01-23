
"use client"
import React, { useState } from 'react'

const ResetPasswordBox = () => {
        const [errorMessage, setErrorMessage] = useState("");
    return (
        <>
            <div className="bg-white py-6 rounded-md  w-full">
               
               
                <form >
                    <div className="flex flex-col justify-between mb-4">
                        <div className='mb-3 w-full'>
                            <label htmlFor="pass" className='text-sm text-gray-500 text-center mb-2'>New Password</label>
                            <input id="naee" type="text" className="w-full h-12 pl-2 block text-sm border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className='mb-3 w-full'>
                            <label htmlFor="pass" className='text-sm text-gray-500 text-center mb-2'>New Password</label>
                            <input id="naee" type="text" className="w-full h-12 pl-2 block  text-sm border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>
                    {errorMessage && (
                        <p className="text-sm text-red-500 mb-2 text-center">
                            {errorMessage}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                    >
                        Reset password
                    </button>
                </form>
            </div>
        </>
    )
}

export default ResetPasswordBox
