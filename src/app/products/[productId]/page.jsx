import Wrapper from '@/components/Wrapper'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import Link from 'next/link'
import ProductDetailsInfo from '@/components/ProductDetailsInfo'
import ProductZoom from '@/components/ProductZoom'
const ProductDetailsPage = () => {
    return (
        <>

            <section className="product_details">
                <Wrapper className="lg:!px-0 py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link href="/">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <Link href="/product">Products</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbPage>
                                <Link href="/productsid">Lacnor Essentials Orange Juice 180ml (Pack of 8)s</Link>
                            </BreadcrumbPage>
                        </BreadcrumbList>
                    </Breadcrumb>
                </Wrapper>

                <Wrapper>
                    <div className="flex Product_info_Details gap-5">
                        <div className="w-[50%]">
                            <div className="ProductZoomBox  rounded-lg">
                                <ProductZoom />
                            </div>
                        </div>
                        <div className="w-[60%] ">
                            <ProductDetailsInfo />
                        </div>
                    </div>
                </Wrapper>

            </section>





        </>
    )
}

export default ProductDetailsPage
