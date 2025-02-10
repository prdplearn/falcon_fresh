"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import Sidebar from "@/components/ProductSidebar";
import ProductCard from "@/components/ProductCard";
import { PAGE_SIZE } from "@/utils/constants";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchData = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products?limit=150");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const { products } = await response.json();
            setProduct(products);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Pagination Calculation
    const totalProducts = product.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE) - 1;
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    // Handle Pagination Navigation
    const handlePageChange = (n) => {
        if (n >= 0 && n <= noOfPages) setCurrentPage(n);
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(0, prev - 1)); // Prevent going below 0
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(noOfPages, prev + 1)); // Prevent going past last page
    };

    return (
        <>
            <section className="products w-full py-4">
                <Wrapper className="lg:!px-0">
                    <nav>
                        <Link href="/">Home</Link> / <Link href="/products">Products</Link>
                    </nav>
                </Wrapper>
            </section>

            <Wrapper className="lg:!px-0">
                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                    <Sidebar />
                    <article className="flex-1">
                        <h1 className="text-xl font-bold">Snacks & Munchies</h1>

						<div className="flex flex-col md:flex-row justify-between lg:items-center mb-6 gap-3">
							<div>
								<p className="text-gray-600 text-sm">
									<span className="text-gray-900 pr-1">{product && product.length}</span>
									Products found
								</p>
							</div>
							<div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<a href="" className="text-green-600">
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
												<path d="M9 6l11 0"></path>
												<path d="M9 12l11 0"></path>
												<path d="M9 18l11 0"></path>
												<path d="M5 6l0 .01"></path>
												<path d="M5 12l0 .01"></path>
												<path d="M5 18l0 .01"></path>
											</svg>
										</a>
										<a href="" className="active text-gray-800">
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
												<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
												</path>
												<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
												</path>
												<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
												</path>
												<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
												</path>
											</svg>
										</a>
										<a href="" className="text-gray-800">
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid-dots" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
												<path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
												<path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
											</svg>
										</a>
									</div>
									<div className="ml-3 lg:hidden">
										<button className="btn rounded-md p-2  inline-flex items-center gap-x-2 bg-white text-gray-800 border-gray-300 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300" >
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter inline-block" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
												<path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z">
												</path>
											</svg>
											Filters
										</button>
									</div>
								</div>

								<div className="flex gap-3">
									<div className="flex-grow-1">

										<select className="text-gray-600 py-2 px-3 block w-full border-gray-300 border rounded-lg focus:border-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none">
											<option defaultValue>Show: 50</option>
											<option value="10">10</option>
											<option value="20">20</option>
											<option value="30">30</option>
										</select>
									</div>
									<div>

										<select className="text-gray-600 py-2 block w-full border-gray-300 px-3 border  rounded-lg focus:border-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none">
											<option defaultValue>Sort by: Featured</option>
											<option value="Low to High">Price: Low to High</option>
											<option value="High to Low">Price: High to Low</option>
											<option value="Release Date">Release Date</option>
											<option value="Avg. Rating">Avg. Rating</option>
										</select>
									</div>
								</div>
							</div>




						</div>

                        <div className="product grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {product.slice(start, end).map((item) => (
                                <ProductCard key={item.id} product={item} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="pagination_wrapper py-8">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <button 
                                            disabled={currentPage === 0} 
                                            className="rounded-md disabled:bg-gray-200" 
                                            onClick={handlePrevPage}
                                        >
                                            <PaginationPrevious />
                                        </button>
                                    </PaginationItem>

                                    {[...Array(noOfPages + 1).keys()].map((n) => (
                                        <PaginationItem key={n}>
                                            <PaginationLink
                                                className={`p-3 cursor-pointer ${n === currentPage ? "bg-orange-400" : ""}`}
                                                onClick={() => handlePageChange(n)}
                                            >
                                                {n + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <button 
                                            disabled={currentPage === noOfPages} 
                                            className="rounded-md disabled:bg-gray-200" 
                                            onClick={handleNextPage}
                                        >
                                            <PaginationNext />
                                        </button>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </article>
                </div>
            </Wrapper>
        </>
    );
};

export default ProductPage;
