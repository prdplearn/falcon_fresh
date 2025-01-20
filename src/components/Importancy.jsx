import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import { PriceTag } from '@/assets/images'
import { importancy } from '@/utils/data'

const Importancy = () => {
  return (
    <Wrapper className="my-10 !px-0">
      <div className="fresh_imp grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-5">

        {
          importancy && importancy.map((items) => <div key={items.id} className="border p-4 rounded-lg border-[#D9D9D9] flex items-center w-full">
            <div className="img w-14 pr-3">
              <Image src={items.productImage} width={"100%"} height={40} alt='tage' />
            </div>
            <div className="cnt">
              <h2 className='text-[--primeColor] font-medium text-[18px]'>{items.name}</h2>
              <p className='text-[#8D8D8D] text-[14px] font-light lg:text-[16px]'>{items.subtitle}</p>
            </div>
          </div>)
        }




      </div>

    </Wrapper>
  )
}

export default Importancy
