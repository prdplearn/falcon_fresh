import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { ChatIcon, LogoWhite, MailIcon, MapIcon, TimeIcon } from '@/assets/images'

const Footer = () => {
    return (
        <footer className='bg-[--primeColor] py-14'>
            <Wrapper>
                <div className="footer_logo text-center w-full py-9">
                    <Image src={LogoWhite} width={150} height={"auto"} alt="Footer Logo" className='mx-auto' />
                </div>
                <div className="flex flex-col lg:flex-row mt-6 gap-8 pb-8">
                    <div className="w-full lg:w-[30%]">
                        <h2 className='lg:text-2xl text-white uppercase mb-6'>Contact Us</h2>

                        <ul className='mr-16'>
                            <li className='font-light text-sm text-white mb-5 flex gap-4'><div className='img_icon'><Image src={MapIcon} width={35} height={35} alt='Map Icon' /></div> Falcon Global General Trading LLC Al Awir Road, Nadd Al Hamar Dubai, United Arab Emirates</li>
                            <li className='font-light text-sm text-white mb-5 flex gap-4 items-center'><div className='img_icon'><Image src={MailIcon} width={20} height={20} alt='Map Icon' /></div>hello@falconfresh.com</li>
                            <li className='font-light text-sm text-white mb-5 flex gap-4'><div className='img_icon'><Image src={ChatIcon} width={20} height={20} alt='Map Icon' /></div>+972065464241</li>
                            <li className='font-light text-sm text-white mb-5 flex gap-4'><div className='img_icon'><Image src={TimeIcon} width={20} height={20} alt='Map Icon' /></div>Timings : 8am - 5pm (Sunday Closed)</li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-[70%]">
                        <div className="flex flex-col lg:flex-row justify-between">
                            <div className='footer-list'>
                                <h2 className='lg:text-2xl text-white uppercase mb-6'>Contact Us</h2>
                                <ul className='mr-16'>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4'>Sign In</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>New Account</li>

                                </ul>
                            </div>
                            <div className='footer-list'>
                                <h2 className='lg:text-2xl text-white uppercase mb-6'>Information</h2>
                                <ul className='mr-16'>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4'>Terms & Conditions</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Delivery Policy</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Refund Policy</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Privacy Policy</li>

                                </ul>
                            </div>
                            <div className='footer-list'>
                                <h2 className='lg:text-2xl text-white uppercase mb-6'>Shop By</h2>
                                <ul className='mr-3 columns-2'>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4'>Fruits & Veggies </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Rice and Rice Products</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Masalas & Spices</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Edible Oil  </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Salt, Sugar & Jaggery  </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Water Packs </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Coffee & Tea</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Soft Drinks</li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Frozen, Meat & Dairy </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Cleaning Supplies </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Laundry Supplies </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Beauty & Hygiene  </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Baby Care </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>Ramadan Deals </li>
                                    <li className='font-light text-sm text-white mb-2 flex gap-4 items-center'>More Menus</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 border-t border-gray-200 pb-5 pt-10 justify-between items-center flex flex-col lg:flex-row">
                    <p className='text-sm text-white'>Copyright 2024, Falcon Global General Trading L.L.C, All rights reserved</p>
                    <p className='text-sm text-white'>Vision Crafted by: SynapseIndia</p>
                </div>
            </Wrapper>

        </footer>
    )
}

export default Footer
