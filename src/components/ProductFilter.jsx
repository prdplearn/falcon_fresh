"use client"

import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { productData } from '@/utils/data';
import SkeletonCard from './SkeletonCard';
import ProductCard from './ProductCard';
import { Button } from './ui/button';
import { leaf } from '@/assets/images';
const ProductFilter = () => {
          const [products, setProducts] = useState([]);
         const fetchData = async () => {
             try {
                 const response = await fetch("https://dummyjson.com/products?limit=150");
                 if (!response.ok) {
                     throw new Error(`HTTP error! Status: ${response.status}`);
                 }
                 const { products } = await response.json();
                 setProducts(products);
             } catch (error) {
                 console.error("Failed to fetch data:", error);
             }
         };
     
         useEffect(() => {
             fetchData();
         }, []);
    return (
        <>
            <Wrapper className="!px-0">
                <div className='flex justify-between flex-col lg:flex-row items-center pt-6'>
                    <h2 className='xl:text-[32px] font-bold mb-3 lg:mb-0'>Daily Best Sells</h2>
                    <div className="filterWrapper">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-4">
                                <NavigationMenuItem className='text-[--primeColor]'>Featured</NavigationMenuItem>
                                <NavigationMenuItem>Popular</NavigationMenuItem>
                                <NavigationMenuItem>New added</NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 2xl:gap-5">
                        <div className="lg:w-[25%] 2xl:w-[20%] rounded-xl p-4 2xl:p-6 bg_leaf"
                            style={{
                                backgroundImage: `url(${leaf.src})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                // Use `leaf.src` for Next.js images

                            }}
                        >
                            <div className='flex flex-col justify-between items-center h-full 2xl:px-6 '>
                                <h2 className='pt-10 font-medium text-center 2xl:text-[24px] text-lg'>Bring nature into your home</h2>
                                <div className='pb-6'>
                                    <Button className="bg-[--primeColor] text-white rounded-full">Shop Now</Button>
                                </div>
                            </div>


                        </div>
                        <div className='lg:w-[75%] 2xl:w-[80%] '>
                            <div className="Filter relative">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    navigation={{
                                        nextEl: '.filterProd_next',
                                        prevEl: '.filterProd_prev',
                                    }}
                                    loop
                                    // pagination={{ clickable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    className='FilterProduct'
                                    breakpoints={{
                                        // Define breakpoints for responsiveness
                                        320: {
                                            slidesPerView: 1, // 1 slide on small screens
                                            spaceBetween: 10,
                                        },
                                        640: {
                                            slidesPerView: 2, // 2 slides on medium screens
                                            spaceBetween: 15,
                                        },
                                        1024: {
                                            slidesPerView: 3, // 4 slides on larger screens
                                            spaceBetween: 20,
                                        },
                                        1440: {
                                            slidesPerView: 4, // 6 slides on extra-large screens
                                            spaceBetween: 25,
                                        },
                                    }}
                                >
                                    {/* Map Over Category Data */}
                                    {products && products.length > 0
                                        ? products.map((product, index) => (
                                            <SwiperSlide key={`${product.id}-${index}`}> {/* Combine ID and index */}
                                                <ProductCard product={product} />
                                            </SwiperSlide>
                                        ))
                                        : Array(6)
                                            .fill(0)
                                            .map((_, index) => (
                                                <SwiperSlide key={index}> {/* `index` is fine for skeletons */}
                                                    <SkeletonCard />
                                                </SwiperSlide>
                                            ))}
                                </Swiper>

                                {/* Custom Navigation Arrows */}
                                <div className="filterProd_prev outside_Arrow_prev swiper-button-prev absolute top-1/2 left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer">

                                </div>
                                <div className="filterProd_next outside_Arrow_next swiper-button-next absolute top-1/2 right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer">

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </Wrapper>

        </>
    )
}

export default ProductFilter
