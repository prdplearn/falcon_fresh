
import { cart_icon, Product1, salt } from '@/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const ProductCard = ({ product }) => {
    return (
        <div className={`Card relative h-full justify-between rounded-xl hover:bg-pink-50 overflow-hidden  flex flex-col hover:border-dashed transition-all duration-100 hover:border-[--primeColor] border border-[#d9d9d9] gap-5  items-center `} >
            {
                product.isSale && <span className='text-[8px] px-2 py-1 bg-[--primeColor] text-white rounded-full uppercase absolute top-3 left-3'>Best Price</span>
            }

            <div className="img_bx h-[250px] pt-6 pb-6 px-6 group">
                {product.thumbnail && (
                    <Image src={product.thumbnail} width={200} height={200} alt={product.title} className='w-full h-full group-hover:scale-105 transition-all duration-75' />
                )}

            </div>
            <div className="content w-full text-left pt-6 relative  border-t border-[#d9d9d9]">
                <div className='p-6 pt-0 min-h-[100px] '>
                    <span className='bg-orange-100 absolute top-2 r text-orange-400 text-xs px-2 py-1 rounded-md'>{product.rating}</span>
                    <Link href={`/products/${product.id}`}>
                        <h2 className='font-medium  text-[18px] mt-3'>{product.title}</h2>
                    </Link>

                    <div className='flex justify-between mt-3'>
                        <p className='text-[--primeColor] text-[18px] '>$ {product.discountPercentage}</p><p className='text-[#6A6A6A]  line-through'>$ {product.discountPercentage}</p>
                    </div>
                </div>

                <Button className="w-full rounded-none bg-[#eeeeee] hover:bg-[#3BB77E] py-8 text-md uppercase text-black "><Image src={cart_icon} width={18} height={18} alt='Cart icomd' /> Add To Cart</Button>
            </div>


        </div>
    )
}

export default ProductCard
