import Wrapper from '@/components/Wrapper'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import Link from 'next/link'
import ProductDetailsInfo from '@/components/ProductDetailsInfo'
import ProductZoom from '@/components/ProductZoom'
import ProductTab from '@/components/ProductTab'
import ProductCard from '@/components/ProductCard'
import { productData } from '@/utils/data'
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

                <Wrapper>
                    <ProductTab />
                </Wrapper>


                <section className="feature_products py-8">
                    <Wrapper>
                        <div className="grid grid-cols-2">
                            <div className="py-6">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-3 ">
                                    Related Products
                                </h2>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            
                            {
								productData && productData.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)
							}

                        </div>

                    </Wrapper>
                </section>
            </section>

        </>
    )
}

export default ProductDetailsPage
