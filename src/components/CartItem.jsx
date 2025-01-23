"use client"
import React from 'react'
import QuantityBox from './QuantityBox'
import { P1 } from '@/assets/images'
import Image from 'next/image'

const CartItem = (props) => {
  return (
    <>
      <div className="py-3 border-gray-300 border-t">
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
								</div>
    </>
  )
}

export default CartItem
