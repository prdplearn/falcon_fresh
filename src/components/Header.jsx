

import React from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { bulk_ic1, bulk_ic2, cart_icon, logo, user_icon } from '@/assets/images'
import SearchBar from './Search'
import CountrySelect from './CountrySelect'
import { ScrollArea } from "@/components/ui/scroll-area"
import { GoDot } from "react-icons/go";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from './ui/button'
import { IoMenu } from "react-icons/io5";
import Menu from './Menu'
import { Input } from './ui/input'
import UserAuth from './UserAuth'
import getAuthUser from '@/lib/getAuthUser'
import NavLink from './NavLink'



const Header = async () => {
    const sessionData = await getAuthUser()
    console.log("header", sessionData);

    return (
        <>
            <div className='bg-[#60BAAE] top_bar'>
                <Wrapper className="w-full lg:max-w-[95%] lg:p-3 p-2">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className='hidden lg:block'>
                            <ul className='flex gap-3'>
                                <li><Link href="" className='text-white text-[10px] lg:text-xs'>About Us</Link></li>
                                <li><Link href="" className='text-white text-[10px] lg:text-xs'>My Account</Link></li>
                                <li><Link href="" className='text-white text-[10px] lg:text-xs'>Wishlist</Link></li>
                                <li><Link href="" className='text-white text-[10px] lg:text-xs'>Order Tracking</Link></li>
                            </ul>
                        </div>
                        <div className='text-center'>
                            <p className='text-white text-[10px] lg:text-xs '>Free Delivery in Dubai, Sharjah & Ajman For Orders Above Aed 100</p>
                        </div>
                        <div className='text-end hidden lg:block'>
                            <p className='text-white text-[10px] lg:text-xs'>Need help? Call Us:+ 1800 900</p>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <header >
                <Wrapper className="max-w-[95%] py-3 !px-0">
                    <nav className='flex gap-5 items-center justify-between'>
                        <div className='flex gap-5 items-center'>
                            <div className="logo w-auto md:w-[200px]">
                                <Link href="/">
                                    <Image src={logo} alt='logo' width={140} height={140} className=' h-[80px] md:w-[150px]' />
                                </Link>
                            </div>
                            <SearchBar />
                        </div>
                        <div className="cart_compo flex justify-center items-center ">
                            <div className='flex gap-3'>
                                <CountrySelect />
                                {
                                    sessionData ? <UserAuth /> : (<div className='flex items-center'>
                                        <Image src={user_icon} width={30} height={30} alt='User Icon' className='lg:mr-2 inline-block w-[50px] xl:w-[30px]' /><NavLink href="/login" label="Login" />
                                    </div>)
                                }


                                <button className='w-full lg:ml-5 '>
                                    <Link href="/cart">
                                        <Image className='inline-block w-[20px] lg:w-[25px]' alt='cart' src={cart_icon} width={25} height={25} />
                                        (<span className='count text-lg text-[#B21F78]'>0</span>)
                                    </Link>

                                </button>
                            </div>
                        </div>
                    </nav>

                </Wrapper>
                <menu className='border-2 border-t border-t-gray-300 border-b border-b-gray-300 lg:py-2'>
                    <Wrapper className="max-w-[95%] !px-0  flex items-center">
                        <Sheet>
                            <SheetTrigger><span className='text-md text-[--primeColor] font-medium'><IoMenu fontSize={30} className='inline' /> All</span></SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle className="text-left">Our Store</SheetTitle>

                                    <div className="search_group  lg:hidden mb-4">
                                        <Input placeholder={"Search Product"} className="border border-gray-300 text-gray-900 rounded-lg focus:shadow-[0_0_0_.25rem_rgba(10,173,10,.25)] focus:ring-green-600 focus:ring-0 focus:border-green-600 focus-visible:outline-none focus:outline-none block p-2 px-3 disabled:opacity-50 disabled:pointer-events-none w-full text-base" />
                                        <Button className="w-full mt-2 text-left">Search a Product</Button>
                                    </div>

                                    <h2 className='mt-5 text-[--primeColor] pb-3 font-semibold text-left'>All Products</h2>
                                    <ScrollArea className="h-full lg:h-[70vh] w-[3
                                    0px] rounded-md border mt-9 p-4">
                                        <ul className='mt-4'>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Deals of the Day</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Fruits & Veggies</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Rice and Rice Products</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Masalas & Spices</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Salt, Sugar & Jaggery</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Edible Oil</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Water Packs</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Coffee & Tea</Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Soft Drinks </Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Frozen, Meat & Dairy </Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' /> Snacks & Munchies </Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' />Cold Drinks & Juices </Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' />Ice Creams & Frozen Desserts </Link></li>
                                            <li className='mb-3 flex'><Link href="" className='flex gap-3 items-center'> <GoDot className='text-[--primeColor]' />Atta, Rice & Dal </Link></li>
                                        </ul>

                                    </ScrollArea>

                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                        <div className='ml-5 hidden lg:block'>
                            <Menu />
                        </div>

                        <div className='ml-auto  md:hidden xl:block'>
                            <ul className="flex justify-end">
                                <li className='flex lg:mr-4'> <Link href="" className='flex mr-4 items-center text-xs lg:text-sm'><Image src={bulk_ic1} width={25} height={25} alt='bluk icon' className='mr-2 w-[16px] lg:mr-3 lg:w-[25px]' /> Bulk Buysbulk</Link></li>
                                <li className='flex lg:mr-4'> <Link href="" className='flex items-center text-xs lg:text-sm'> <Image src={bulk_ic2} width={25} height={25} alt='bluk icon' className='mr-2 w-[16px] lg:mr-3 lg:w-[25px]' /> Bulk Enquiries</Link></li>
                            </ul>
                        </div>


                    </Wrapper>
                </menu>
            </header>


        </>
    )
}

export default Header
