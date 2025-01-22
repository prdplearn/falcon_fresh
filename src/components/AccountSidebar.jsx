'use client'
import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const AccountSidebar = () => {

    const pathname = usePathname();
    const isActive = (path) => pathname === path;



    return (
        <>
            <aside className="account_sidebar  rounded-md sticky bg-muted top-0">
                <div className="relative my-4 w-56 sm:hidden ">
                    <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
                    <label htmlFor="select-1" className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-pink-700 peer-checked:ring">Accounts </label>
                    <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                    <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-pink-500 hover:text-white">Accounts</li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-pink-500 hover:text-white">Team</li>
                        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-pink-500 hover:text-white">Others</li>
                    </ul>
                </div>

                <div className="col-span-2 hidden sm:block   rounded-md px-3 py-6">
                    <ProfileCard />
                    <ul>

                        <Link
                            href="/profile"
                            className={isActive('/profile') ? 'active text-pink-500  text-sm border-l-2 border-transparent mt-5 cursor-pointer font-semibold px-2 transition' : 'text-slate-500 text-sm border-l-2 border-transparent mt-5 cursor-pointer font-semibold px-2 transition block'}
                          
                        >
                          My Profile
                        </Link>

                        <Link
                            href="/wishlist"
                            className={isActive('/wishlist') ? 'active text-pink-500  text-sm border-l-2 border-transparent mt-5 cursor-pointer font-semibold px-2 transition' : 'text-slate-500 text-sm border-l-2 border-transparent mt-5 cursor-pointer font-semibold px-2 transition block'}
                        >
                            Wishlist
                        </Link>

                    

                        <Link
                            href="/orders"
                            className={isActive('/orders') ? 'active text-pink-500  text-sm border-l-2 border-transparent mt-5 cursor-pointer font-semibold px-2 transition' : 'text-slate-500 text-sm border-l-2 border-transparent mt-5 cursor-pointer font-semibold px-2 transition block'}
                        >
                            Orders
                        </Link>


                        <li className="mt-5 cursor-pointer border-l-2 border-transparent text-sm px-2 font-semibold transition hover:border-l-pink-700 hover:text-pink-700">Logout</li>

                    </ul>
                </div>
            </aside>
        </>
    )
}

export default AccountSidebar
