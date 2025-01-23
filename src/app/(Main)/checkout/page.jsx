import Wrapper from '@/components/Wrapper'
import React from 'react'

const CheckoutPage = () => {
  return (
    <section className='checkout_wrapper'>
        <Wrapper className="py-0">
        <section className="bg-white antialiased dark:bg-gray-900 mb-6">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8 p-8 rounded-md bg-slate-50">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                      <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                    </div>

                    <div>
                      <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                      <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <label htmlFor="select-country-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
                      </div>
                      <select id="select-country-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                        <option defaultValue>United States</option>
                        <option value="AS">Australia</option>
                        <option value="FR">France</option>
                        <option value="ES">Spain</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                      </div>
                      <select id="select-city-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                        <option defaultValue>San Francisco</option>
                        <option value="NY">New York</option>
                        <option value="LA">Los Angeles</option>
                        <option value="CH">Chicago</option>
                        <option value="HU">Houston</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
                      <div className="flex items-center">
                        <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                          <svg fill="none" aria-hidden="true" className="me-2 h-4 w-4" viewBox="0 0 20 15">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            </mask>
                            <g mask="url(#a)">
                              <path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd" />
                              <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                              <g filter="url(#filter0_d_343_121520)">
                                <path
                                  fill="url(#paint0_linear_343_121520)"
                                  fillRule="evenodd"
                                  d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                  clipRule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#fff" />
                                <stop offset="1" stopColor="#F0F0F0" />
                              </linearGradient>
                              <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="1" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                          +1
                          <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                          </svg>
                        </button>
                        <div id="dropdown-phone-3" className="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                          <ul className="p-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button-2">
                            <li>
                              <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                <span className="inline-flex items-center">
                                  <svg fill="none" aria-hidden="true" className="me-2 h-4 w-4" viewBox="0 0 20 15">
                                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                    </mask>
                                    <g mask="url(#a)">
                                      <path fill="#D02F44" fillRule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clipRule="evenodd" />
                                      <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                                      <g filter="url(#filter0_d_343_121520)">
                                        <path
                                          fill="url(#paint0_linear_343_121520)"
                                          fillRule="evenodd"
                                          d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                          clipRule="evenodd"
                                        />
                                      </g>
                                    </g>
                                    <defs>
                                      <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#fff" />
                                        <stop offset="1" stopColor="#F0F0F0" />
                                      </linearGradient>
                                      <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="1" />
                                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                                      </filter>
                                    </defs>
                                  </svg>
                                  United States (+1)
                                </span>
                              </button>
                            </li>
                            <li>
                              <button type="button" className="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                <span className="inline-flex items-center">
                                  <svg className="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                                      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                                    </mask>
                                    <g mask="url(#a)">
                                      <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                      <path fill="#fff" fillRule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clipRule="evenodd" />
                                      <path stroke="#DB1F35" strokeLinecap="round" strokeWidth=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093" />
                                      <path fill="#E6273E" fillRule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clipRule="evenodd" />
                                    </g>
                                  </svg>
                                  United Kingdom (+44)
                                </span>
                              </button>
                            </li>

                          </ul>
                        </div>
                        <div className="relative w-full">
                          <input type="text" id="phone-input" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Full Address </label>
                      <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
                    </div>

                    <div>
                      <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Zip code </label>
                      <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="1203 035C" required />
                    </div>

                    <div>
                      <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
                      <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="DE42313253" required />
                    </div>

                    <div className="sm:col-span-2">
                      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                        </svg>
                        Add new address
                      </button>
                    </div>
                  </div>
                </div>

           


                <div>
                  <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
                  <div className="flex max-w-md items-center gap-4">
                    <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                    <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-pink-600 hover:bg-pink-700" >Apply</button>
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md p-8 rounded-md bg-green-50 checkout_right_wrapper">
                <div className="flow-root">
                  <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
                    </dl>


                    <div className="scroll_Y_height max-h-[300px] h-full overflow-y-auto my-3 py-3">
                      <div className="flex gap-2 items-product mb-5 border-dotted border-b border-pink-300">
                        <div className="w-[20%] ">
                          <img
                            src="https://coma-demo.myshopify.com/cdn/shop/files/image119.png"
                            alt=""
                            className="p-1 rounded-md border border-teal-300 w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="w-[80%] ">
                          <h2 className="font-medium text-sm">
                            Mivi Fort S38 With Sub woofer, 38W, BT v5.3, Surround Sound 38
                          </h2>
                          <div className="py-2 font-medium text-slate-600 flex justify-between pr-6">
                           <span className='text-sm'>Qty: 1</span><span className="text-red-500 font-bold text-sm">$ 250</span>
                          </div>
                        </div>

                      </div>
                      <div className="flex gap-2 items-product mb-5 border-dotted border-b border-pink-300">
                        <div className="w-[20%] ">
                          <img
                            src="https://coma-demo.myshopify.com/cdn/shop/files/image119.png"
                            alt=""
                            className="p-1 rounded-md border border-teal-300 w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="w-[80%] ">
                          <h2 className="font-medium text-sm">
                            Mivi Fort S38 With Sub woofer, 38W, BT v5.3, Surround Sound 38
                          </h2>
                          <div className="py-2 font-medium text-slate-600 flex justify-between pr-6">
                           <span className='text-sm'>Qty: 1</span><span className="text-red-500 font-bold text-sm">$ 250</span>
                          </div>
                        </div>

                      </div>
                    
                      <div className="flex gap-2 items-product mb-5 border-dotted border-b border-pink-300">
                        <div className="w-[20%] ">
                          <img
                            src="https://coma-demo.myshopify.com/cdn/shop/files/image119.png"
                            alt=""
                            className="p-1 rounded-md border border-teal-300 w-[60px] h-[60px]"
                          />
                        </div>
                        <div className="w-[80%] ">
                          <h2 className="font-medium text-sm">
                            Mivi Fort S38 With Sub woofer, 38W, BT v5.3, Surround Sound 38
                          </h2>
                          <div className="py-2 font-medium text-slate-600 flex justify-between pr-6">
                           <span className='text-sm'>Qty: 1</span><span className="text-red-500 font-bold text-sm">$ 250</span>
                          </div>
                        </div>

                      </div>
                    

                    
                    

                    </div>

                    {/* <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                      <dd className="text-base font-medium text-green-500">0</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">$199</dd>
                    </dl> */}

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
                    </dl>
                  </div>
                </div>

                <div className="space-y-3">
                  <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-pink-600 hover:bg-pink-700">Proceed to Payment</button>

                </div>
              </div>
            </div>
          </form>
        </section>
      </Wrapper>
    </section>
  )
}

export default CheckoutPage
