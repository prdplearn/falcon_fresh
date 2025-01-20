"use client";

import React from 'react';
import Wrapper from './Wrapper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryBox from './CategoryBox';
import { categoryData } from '@/utils/data';
import SkeletonCard from './SkeletonCard';

const CategorySlider = () => {
    return (
        <Wrapper className='!px-0 mt-16 !mb-0 relative'>
            {/* Header Section */}
            <div className='flex justify-between'>
                <h2 className='xl:text-[32px] font-bold'>Explore By Categories</h2>
            </div>

            {/* Swiper Slider */}
            <div className="CategorySlider mt-3 relative">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={15}
                    slidesPerView={6}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    loop
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className='CategorySlider'
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
                            slidesPerView: 4, // 4 slides on larger screens
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 6, // 6 slides on extra-large screens
                            spaceBetween: 20,
                        },
                    }}
                >
                    {/* Map Over Category Data */}
                    {categoryData && categoryData.length > 0
                        ? categoryData.map((items) => (
                            <SwiperSlide key={items.id}>
                                <CategoryBox items={items} />
                            </SwiperSlide>
                        ))
                        : Array(6)
                            .fill(0)
                            .map((_, items) => (
                                <SwiperSlide key={items.id}>
                                    <SkeletonCard />
                                </SwiperSlide>
                            ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <div className="custom-prev outside_Arrow_prev swiper-button-prev absolute top-1/2 left-[-30px] transform -translate-y-1/2 z-10 cursor-pointer">

                </div>
                <div className="custom-next outside_Arrow_next swiper-button-next absolute top-1/2 right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer">

                </div>
            </div>
        </Wrapper>
    );
};

export default CategorySlider;
