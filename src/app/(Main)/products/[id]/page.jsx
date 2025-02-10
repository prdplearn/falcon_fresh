"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import ProductDetailsInfo from '@/components/ProductDetailsInfo';
import ProductZoom from '@/components/ProductZoom';
import ProductTab from '@/components/ProductTab';
import ProductCard from '@/components/ProductCard';
// import { productData } from '@/utils/data';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                
                const productData = await response.json(); // ✅ Fix: Directly get product object
console.log("details", productData)
                setProduct(productData);

                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]); // ✅ Ensure `useEffect` re-runs when `id` changes

    if (loading) return <p className="text-center py-10">Loading product...</p>;
    if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

    return (
        <>
            <section className="product_details">
                <Wrapper className="lg:!px-0 py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem><Link href="/">Home</Link></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem><Link href="/product">Products</Link></BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbPage>{product.title}</BreadcrumbPage>
                        </BreadcrumbList>
                    </Breadcrumb>
                </Wrapper>

                <Wrapper>
                    <div className="flex Product_info_Details gap-5">
                        <div className="w-[50%]">
                            <div className="ProductZoomBox rounded-lg">
                                <ProductZoom product={product} />
                            </div>
                        </div>
                        <div className="w-[60%]">
                            <ProductDetailsInfo product={product} id={id} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper>
                    <ProductTab />
                </Wrapper>

                {/* <section className="feature_products py-8">
                    <Wrapper>
                        <div className="grid grid-cols-2">
                            <div className="py-6">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-3">Related Products</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {product.slice(0, 3).map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>
                    </Wrapper>
                </section> */}
            </section>
        </>
    );
};

export default ProductDetailsPage;
