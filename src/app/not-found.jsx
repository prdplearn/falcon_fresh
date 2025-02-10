import { delivery_fresh, Fruit } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const NotFoundPage = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center flex-col">
                <section className="bg-[--primaryColor] dark:bg-gray-900 mt-16 w-full">
                    <div className="py-8 px-4 mx-auto w-full max-w-screen-xl lg:py-16 lg:px-6 relative">
                        <Image alt="Circle Image" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="absolute bottom-0 left-0" style={{ color: "transparent" }} src={delivery_fresh} />
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-16     text-xl  font-extrabold lg:text-[200px] text-primary-600 dark:text-primary-500">4<span className='text-pink-400'>0</span>4</h1>
                            <p className="mb-4 text-3xl  font-bold text-[--secondaryColor] md:text-4xl dark:text-white">Something`s missing.</p>
                            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can not find that page. <br /> You will find lots to explore on the home page. </p>
                            <a className="gap-2 mr-4 mb-2 transition ease-in-out delay-150 rounded-full text-[undefined] ps-6 pe-4 py-2  inline-block group hover:opacity- hover:scale-105" style={{ backgroundColor: "pink" }} href="/">
                                <span className="flex items-center gap-2 ">
                                    <span className="text-black transition ease-in-out delay-150 group-hover:text-slate-800 pe-3">Go back to Home</span><span className="w-[30px] h-[30px] p-2 text-[--darkBlueColor]  inline-block rounded-full transition ease-in-out delay-150 group-hover:-rotate-45" style={{ backgroundColor: "#fff" }}>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <Image alt="Circle Image" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="absolute top-0 right-0" style="color:transparent" src={Fruit} />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default NotFoundPage
