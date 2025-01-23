import { P1, P2, P3 } from '@/assets/images'
import AccountSidebar from '@/components/AccountSidebar'
import ProductStatus from '@/components/ProductStatus'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


const WishlistPage = () => {
    return (
        <>
            <Wrapper>
                <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto py-6">

                    <div className="flex flex-col md:flex-row gap-4 ">

                        <div className='w-56'>
                            <AccountSidebar />
                        </div>


                        <div className="flex-1 overflow-hidden rounded-xl bg-slate-50 p-6 m">
                            <div className='cart_header mb-3'>
                                <h2 className='font-bold text-lg text-slate-700'>My Wishlist</h2>
                                <p className='text-sm text-slate-500'>There are <span className='font-bold text-red-600'>2</span> products in your Wishlist</p>
                            </div>
                            <div className="table_content mt-8 ">


                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>

                                            <th className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Product Name
                                                </th>

                                                <th scope="col" className="px-6 py-3">
                                                    Items
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Status
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Remove
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex gap-2 items-center'>
                                                        <Image src={P1} width={40} height={40} alt='Product Image' />    Haldiram's Nagpur Aloo Bhujia
                                                    </div>

                                                </td>

                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ProductStatus status="Pending" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <MdDeleteOutline fontSize={25} />

                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex gap-2 items-center'>
                                                        <Image src={P2} width={40} height={40} alt='Product Image' />   Cadbury Dairy Milk 5 Star Bites
                                                    </div>

                                                </td>

                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ProductStatus status="Delivered" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <MdDeleteOutline fontSize={25} />

                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex gap-2 items-center'>
                                                        <Image src={P3} width={40} height={40} alt='Product Image' />   Onion Flavour Potato
                                                    </div>

                                                </td>

                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ProductStatus status="Cancel" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <MdDeleteOutline fontSize={25} />

                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex gap-2 items-center'>
                                                        <Image src={P2} width={40} height={40} alt='Product Image' />   Cadbury Dairy Milk 5 Star Bites
                                                    </div>

                                                </td>

                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ProductStatus status="Delivered" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <MdDeleteOutline fontSize={25} />

                                                </td>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className='flex gap-2 items-center'>
                                                        <Image src={P2} width={40} height={40} alt='Product Image' />   Cadbury Dairy Milk 5 Star Bites
                                                    </div>

                                                </td>

                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    <ProductStatus status="Delivered" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <MdDeleteOutline fontSize={25} />

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        </>
    )
}

export default WishlistPage
