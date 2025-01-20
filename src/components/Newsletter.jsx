import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { delivery_fresh, plane_ic } from '@/assets/images'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Newsletter = () => {
    return (
        <>
            <Wrapper className="!px-0 bg-[#60BA96] rounded-lg pt-12 !pb-0 !my-10">
                <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-10">
                    <div className="text w-full lg:w-[70%] !pb-10">
                        <div className='flex flex-col items-start justify-center h-full'>
                        <h2 className='text-2xl 2xl:text-5xl lg:text-4xl text-white font-semibold xl:mb-6'>Stay home & get your daily <br />needs from our shop</h2>
                        <p className='text-lg xl:text-2xl text-white py-3'>Start You'r Daily Shopping with <span className='font-bold'> Falcon Fresh</span></p>
                        <div className='newsletter_wrapper rounded-full relative w-full xl:max-w-[500px]  2xl:max-w-[600px] mt-6'>
                            <Image src={plane_ic} className='absolute top-5 left-8' width={40} height={40} alt='Plane'/> 
                            <Input className="bg-white rounded-full h-[60px] max-w-[600px] outline-none border-none px-20 focus-visible:outline-none" placeholder="enter email address"/>
                            <Button className="bg-[--primeColor] text-xl h-[60px] rounded-full px-10 mx-auto block mt-4 lg:mt-0 md:absolute top-0 right-0">Subscribe</Button>
                        </div>
                        </div>
                        
                    </div>
                    <div className="img  w-full lg:w-[30%]">
                        <Image src={delivery_fresh} width={500} height={600} alt='Delivery Image'/>
                    </div>
                </div>

            </Wrapper>

        </>
    )
}

export default Newsletter
