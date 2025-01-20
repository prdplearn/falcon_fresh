"use client"
import { Sora } from "next/font/google";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { banner1, HomeSlider2 } from '@/assets/images';
import Image from 'next/image';
import { Button } from "./ui/button";
import { bannerSliders } from "@/utils/data";
const sora = Sora({ subsets: ['latin'] });

const HeroBanner = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    bannerSliders && bannerSliders.map((slides,index) => <SwiperSlide key={`${slides.id}-${index}`}>
                        <div className="banner_Img relative">
                            <Image src={slides.bannerImage} className="w-full rounded-xl " width={1200} height={600} alt={`${slides.Name}`}
                            />
                            <div className="bannerContent absolute top-[20%]  lg:-translate-y-1/2 transform lg:top-1/2 left-[45%] lg:left-[55%] max-w-2xl">
                                <h6 className={`${sora.className} text-xs text-[--GreenColor] lg:text-xl`}>{slides.category}</h6>
                                <h2 className={`${sora.className}  font-bold lg:text-[40px] xl:text-[40px] 2xl:text-[70px] leading-tight`}>{slides.Name}</h2>
                                <p className={`${sora.className} text-xs hidden lg:block  lg:text-[20px] lg:mt-3 `}>{slides.description}</p>
                                <Button className="bg-[--primeColor] rounded-full 2xl:text-lg 2xl:py-3 2xl:px-6 mt-2 lg:mt-4 text-xs">Shop Now</Button>
                                
                            </div>
                        </div>
                    </SwiperSlide>)
                }




            </Swiper>
        </>
    )
}

export default HeroBanner
