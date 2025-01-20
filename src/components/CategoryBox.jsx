import React from 'react'
import Image from 'next/image';
const CategoryBox = ({ items }) => {
    return (
        <>
            <div className={`category_Card relative rounded-xl lg:px-4 2xl:px-5 py-8 flex flex-col gap-5 h-full items-center justify-center`} style={{ backgroundColor: items.catColor }}>
                <div className="img_bx max-h-[250px]">
                    <Image src={items.categoryImage} width={"auto"} height={104} alt='categoryTitle ' className='h-[100px]' />
                </div>
                <div className="content text-center">
                    <h2 className='lg:text-[14px] 2xl:text-lg font-medium'>{items.Name}</h2>
                    <p className='text-[#6A6A6A] lg:text-[14px] 2xl:text-lg  font-medium'>{items.items} Items</p>
                </div>

            </div>
        </>
    )
}

export default CategoryBox
    