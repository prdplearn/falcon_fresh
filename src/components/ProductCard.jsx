import { cart_icon, Product1, salt } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const ProductCard = ({ product }) => {
    return (
        <div className={`Card relative rounded-xl overflow-hidden  flex flex-col hover:border-dashed transition-all duration-100 hover:border-[--primeColor] border border-[#d9d9d9] gap-5 h-full items-center justify-start`} >
            {
                product.isSale && <span className='text-[8px] px-2 py-1 bg-[--primeColor] text-white rounded-full uppercase absolute top-3 left-3'>Best Price</span>
            }

            <div className="img_bx max-h-[350px] pt-12 pb-8 px-6">
                <Image src={product.productImage} width={200} height={200} alt='categoryTitle' className='w-full h-full' />
            </div>
            <div className="content text-left px-4 pt-6  border-t border-[#d9d9d9]">
                <h2 className='font-medium  text-[18px]'>Lacnor Essentials Orange Juice 180ml (Pack of 8)</h2>
                <div className='flex justify-between mt-3'>
                    <p className='text-[--primeColor] text-[18px] '>AED 12.60</p><p className='text-[#6A6A6A] line-through'>AED 12.60</p>
                </div>
            </div>
            <Button className="w-full rounded-none bg-[#eeeeee] py-8 text-md uppercase text-black hover:bg-gray-100"><Image src={cart_icon} width={18} height={18} alt='Cart icomd' /> Add To Cart</Button>

        </div>
    )
}

export default ProductCard
