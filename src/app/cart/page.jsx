import { P1, P2, P3 } from '@/assets/images'
import QuantityBox from '@/components/QuantityBox'
import { Button } from '@/components/ui/button'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <>
    <Wrapper>
    <div className="container py-6">
				<div className="flex flex-wrap">
					<div className="w-full mb-6">
						
						<h1 className="text-xl font-semibold">Shop Cart</h1>
						<p>Shopping in 382480</p>
					</div>
				</div>

				<div className="flex flex-wrap lg:flex-nowrap lg:gap-x-12 gap-y-6">
					<div className="lg:w-2/3 w-full">
						<div className="flex flex-col gap-5">
							
							<div className="bg-red-500 bg-opacity-25 text-red-900 rounded-lg py-3 px-4" role="alert">
								You’ve got FREE delivery. Start 
								<a href="#!" className="text-red-950"> checkout now! </a>
							</div>
							<ul className="list-none">
								
								<li className="py-3 border-gray-300 border-t">
									<div className="flex items-center justify-between">
										<div className="w-1/2 md:w-1/2 lg:w-3/5">
											<div className="flex flex-row gap-5">
												<Image width={50} height={60} src={P1} alt="Ecommerce" className="w-16 h-16"/>
												<div className="flex flex-col gap-2">
													<div>
														
														<a href="./shop-single.html" className="text-inherit">
															<h6>Haldiram's Sev Bhujia</h6>
														</a>
														<span className="text-gray-500 text-sm">.98 / lb</span>
													</div>
													
													<div className="text-sm leading-none">
														<a href="#!" className="text-green-600 flex items-center gap-1">
															<span className="align-text-bottom">
																<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
																	<path stroke="none" d="M0 0h24v24H0z" fill="none">
																	</path>
																	<path d="M4 7l16 0"></path>
																	<path d="M10 11l0 6"></path>
																	<path d="M14 11l0 6"></path>
																	<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
																	</path>
																	<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
																	</path>
																</svg>
															</span>
															<span className="text-gray-500 text-sm">Remove</span>
														</a>
													</div>
												</div>
											</div>
										</div>
										
										<div className="w-1/3 md:w-1/4 lg:w-1/6">
											
											<QuantityBox/>
										</div>
										
										<div className="w-1/5 md:w-1/5 text-right">
											<span className="font-bold text-gray-800">$5.00</span>
										</div>
									</div>
								</li>
								
								<li className="py-3 border-gray-300 border-t">
									<div className="flex items-center justify-between">
										<div className="w-1/2 md:w-1/2 lg:w-3/5">
											<div className="flex flex-row gap-5">
												<Image width={50} height={60} src={P1} alt="Ecommerce" className="w-16 h-16"/>
												<div className="flex flex-col gap-2">
													<div>
														<a href="./shop-single.html" className="text-inherit">
															<h6>NutriChoice Digestive</h6>
														</a>
														<span className="text-gray-500 text-sm">250g</span>
													</div>
													
													<div className="leading-none">
														<a href="#!" className="text-green-600 flex items-center gap-1">
															<span className="align-text-bottom">
																<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
																	<path stroke="none" d="M0 0h24v24H0z" fill="none">
																	</path>
																	<path d="M4 7l16 0"></path>
																	<path d="M10 11l0 6"></path>
																	<path d="M14 11l0 6"></path>
																	<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
																	</path>
																	<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
																	</path>
																</svg>
															</span>
															<span className="text-gray-500 text-sm">Remove</span>
														</a>
													</div>
												</div>
											</div>
										</div>

										
										<div className="w-1/3 md:w-1/4 lg:w-1/6">
										
											<div className="input-group input-spinner rounded-lg flex justify-between items-center">
											<QuantityBox/>
											</div>
										</div>
									
										<div className="w-1/5 md:w-1/5 text-right">
											<span className="font-bold text-red-600">$20.00</span>
											<div className="line-through text-gray-500">$26.00</div>
										</div>
									</div>
								</li>
							
								<li className="py-3 border-gray-300 border-t">
									<div className="flex items-center justify-between">
										<div className="w-1/2 md:w-1/2 lg:w-3/5">
											<div className="flex flex-row gap-5">
												<Image width={50} height={60} src={P2} alt="Ecommerce" className="w-16 h-16"/>
												<div className="flex flex-col gap-2">
													<div>
														
														<a href="./shop-single.html" className="text-inherit">
															<h6>Cadbury 5 Star Chocolate</h6>
														</a>
														<span className="text-gray-500 text-sm">1 kg</span>
													</div>
												
													<div className="text-base leading-none">
														<a href="#!" className="text-green-600 flex items-center gap-1">
															<span className="align-text-bottom">
																<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
																	<path stroke="none" d="M0 0h24v24H0z" fill="none">
																	</path>
																	<path d="M4 7l16 0"></path>
																	<path d="M10 11l0 6"></path>
																	<path d="M14 11l0 6"></path>
																	<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
																	</path>
																	<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
																	</path>
																</svg>
															</span>
															<span className="text-gray-500 text-sm">Remove</span>
														</a>
													</div>
												</div>
											</div>
										</div>

									
										<div className="w-1/3 md:w-1/4 lg:w-1/6">
										
											<div className="input-group input-spinner rounded-lg flex justify-between items-center">
                                            <QuantityBox/>
											</div>
										</div>
								
										<div className="w-1/5 md:w-1/5 text-right">
											<span className="font-bold text-gray-800">$15.00</span>
											<div className="line-through text-gray-500">$20.00</div>
										</div>
									</div>
								</li>
							
								<li className="py-3 border-gray-300 border-t">
									<div className="flex items-center justify-between">
										<div className="w-1/2 md:w-1/2 lg:w-3/5">
											<div className="flex flex-row gap-5">
												<Image width={50} height={60} src={P3} alt="Ecommerce" className="w-16 h-16"/>
												<div className="flex flex-col gap-2">
													<div>
													
														<a href="./shop-single.html" className="text-inherit">
															<h6>Onion Flavour Potato</h6>
														</a>
														<span className="text-gray-500 text-sm">250g</span>
													</div>
										
													<div className="text-sm leading-none">
														<a href="#!" className="text-green-600 flex items-center gap-1">
															<span className="align-text-bottom">
																<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
																	<path stroke="none" d="M0 0h24v24H0z" fill="none">
																	</path>
																	<path d="M4 7l16 0"></path>
																	<path d="M10 11l0 6"></path>
																	<path d="M14 11l0 6"></path>
																	<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
																	</path>
																	<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
																	</path>
																</svg>
															</span>
															<span className="text-gray-500 text-sm">Remove</span>
														</a>
													</div>
												</div>
											</div>
										</div>

									
										<div className="w-1/3 md:w-1/4 lg:w-1/6">
											
											<div className="input-group input-spinner rounded-lg flex justify-between items-center">
                                            <QuantityBox/>
											</div>
										</div>
									
										<div className="w-1/5 md:w-1/5 text-right">
											<span className="font-bold text-gray-800">$15.00</span>
											<div className="line-through text-gray-500">$20.00</div>
										</div>
									</div>
								</li>
								
								<li className="py-3 border-gray-300 border-t border-b">
									<div className="flex items-center justify-between">
										<div className="w-1/2 md:w-1/2 lg:w-3/5">
											<div className="flex flex-row gap-5">
												<Image width={50} height={60} src={P1} alt="Ecommerce" className="w-16 h-16"/>
												<div className="flex flex-col gap-2">
													<div>
													
														<a href="./shop-single.html" className="text-inherit">
															<h6>Salted Instant Popcorn</h6>
														</a>
														<span className="text-gray-500 text-sm">100g</span>
													</div>
												
													<div className="text-sm leading-none">
														<a href="#!" className="text-green-600 flex items-center gap-1">
															<span className="align-text-bottom">
																<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
																	<path stroke="none" d="M0 0h24v24H0z" fill="none">
																	</path>
																	<path d="M4 7l16 0"></path>
																	<path d="M10 11l0 6"></path>
																	<path d="M14 11l0 6"></path>
																	<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12">
																	</path>
																	<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3">
																	</path>
																</svg>
															</span>
															<span className="text-gray-500 text-sm">Remove</span>
														</a>
													</div>
												</div>
											</div>
										</div>

								
										<div className="w-1/3 md:w-1/4 lg:w-1/6">
									
											<div className="input-group input-spinner rounded-lg flex justify-between items-center">
                                            <QuantityBox/>
											</div>
										</div>
									
										<div className="w-1/5 md:w-1/5 text-right">
											<span className="font-bold text-gray-800">$15.00</span>
											<div className="line-through text-gray-500">$25.00</div>
										</div>
									</div>
								</li>
							</ul>
							
							<div className="flex justify-between">
                                <Button className=" bg-green-600 text-white">
                                Continue Shopping
                                </Button>
								
                                <Button className=" bg-gray-800 text-white">
                                Update Cart
                                </Button>
							</div>
						</div>
					</div>

				
					<div className="w-full lg:w-1/3 md:w-full">
					
						<div className="relative card min-w-0">
							<div className="card-body flex flex-col gap-4">
							
								<h2 className="text-md">Summary</h2>
								<div className="relative flex flex-col min-w-0 rounded-lg break-words border bg-white border-1 border-gray-300">
									
									<ul className="flex flex-col">
									
										<li className="relative py-3 px-4 -mb-px border-b border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-start">
											<div>
												<div>Item Subtotal</div>
											</div>
											<span>$70.00</span>
										</li>

										
										<li className="relative py-3 px-4 -mb-px border-b border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-start">
											<div>
												<div>Service Fee</div>
											</div>
											<span>$3.00</span>
										</li>
									
										<li className="relative py-3 px-4 -mb-px border-r-0 border-l-0 border-gray-300 no-underline flex justify-between items-start">
											<div>
												<div className="font-bold text-gray-800">Subtotal</div>
											</div>
											<span className="font-bold text-gray-800">$67.00</span>
										</li>
									</ul>
								</div>
								<div>
									<div className="grid">
								
										<Button className="btn flex justify-between bg-green-600 text-white border-green-600 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-green-700 hover:border-green-700 active:bg-green-700 active:border-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 btn-lg" type="submit">
											Go to Checkout
											<span className="font-bold">$67.00</span>
										</Button>
									</div>
									
									<p className="mt-1">
										<span className="text-sm">
											By placing your order, you agree to be bound by the Freshcart
											<a href="#!" className="text-green-600"> Terms of Service </a>
											and 
											<a href="#!" className="text-green-600"> Privacy Policy. </a>
										</span>
									</p>
								</div>

							
								<div className="flex flex-col gap-3">
									<h5>Add Promo or Gift Card</h5>
									<form className="flex flex-col gap-3">
										<div className="flex flex-col gap-2">
											<div>
											
												<label htmlFor="giftcard" className="mb-2 block text-gray-800">Email
													address</label>
												<input type="text" className="border border-gray-300 text-gray-900 rounded-lg focus:shadow-[0_0_0_.25rem_rgba(10,173,10,.25)] focus:ring-green-600 focus:ring-0 focus:border-green-600 block p-2 px-3 disabled:opacity-50 disabled:pointer-events-none w-full text-base" id="giftcard" placeholder="Promo or Gift Card" />
											</div>
										
											<div className="grid">
												<Button type="submit" className="btn inline-flex items-center gap-x-2 bg-gray-800 text-white border-gray-800 disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-900 hover:border-gray-900 active:bg-gray-900 active:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300">
													Redeem
												</Button>
											</div>
										</div>

										<p className="text-gray-500 text-sm">Terms &amp; Conditions apply</p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </Wrapper>
    
    </>
  )
}

export default CartPage
