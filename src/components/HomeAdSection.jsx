import React from 'react'
import Wrapper from './Wrapper'
import AdsCard from './AdsCard'
import { adsData } from '@/utils/data'
import SkeletonCard from './SkeletonCard'

const HomeAdSection = () => {
    return (
        <Wrapper className="!px-0">
            <div className="ads_Wrapper grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                adsData && adsData.length > 0 ? (
                    adsData.map((item) => <AdsCard key={item.id} item={item} />)
                ) : (
                    <SkeletonCard/>  // Fallback if no data exists
                )
            }
            </div>
          
            
        </Wrapper>
    )
}

export default HomeAdSection
