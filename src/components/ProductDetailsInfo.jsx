
import QuantityBox from "../components/QuantityBox";
import { AiFillShopping } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";

const ProductDetailsInfo = () => {
  

    return (
        <>
            <div className="product_content flex flex-col px-6">
                <div className="mb-3">
                    <h2 className="font-bold text-2xl text-slate-800 mb-3">
                    Lacnor Essentials Orange Juice 180ml (Pack of 8)
                    </h2>
                    <span className=" inline-block px-4 py-2 text-xs bg-orange-100 rounded-md">
                        {" "}
                        Voya
                    </span>
                    <div className="my-2 flex items-center gap-2">
                        {/* <Rating name="read-only" value={4} readOnly size="small" /> */}
                         (4.3)
                        Ratings
                    </div>
                    <div className="in_stock my-3">
                        <p className="px-4 py-2 text-sm bg-green-100 inline-flex items-center gap-3 rounded-md text-green-800">
                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>{" "}
                            In Stock
                        </p>

                        <span className="ml-5 text-slate-500">
                            Available in Stock: (32) Products
                        </span>
                    </div>

                    <div className="price py-3">
                    <div class="text-md">
											<span class="text-gray-900 font-semibold">$32</span>
											<span class="line-through text-gray-500">$35</span>

											<span><small class="text-red-600">26% Off</small></span>
										</div>
                    </div>
                    <div className="desc mt-3">
                        <p className="text-sm text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                            quis earum et perferendis voluptas, ullam, tempora officia
                            asperiores excepturi rem dignissimos corporis sapiente ipsum
                            accusantium ratione amet porro saepe beatae.
                        </p>
                    </div>

                    <div className="size mt-6 flex items-center gap-6">
                        <p className="text-xl font-medium">Size: </p>
                        <div className="size_Check flex gap-3">
                            <button
                                className={`p-4 w-3 flex items-center justify-center h-3 bg-slate-200 rounded-md`}
                            >
                                S
                            </button>
                            <button
                                className={`p-4 w-3 flex items-center justify-center h-3 bg-slate-200 rounded-md`}
                            >
                                M
                            </button>
                            <button
                                className={`p-4 w-3 flex items-center justify-center h-3 bg-slate-200 rounded-md`}
                            >
                                L
                            </button>
                            <button
                                className={`p-4 w-3 flex items-center justify-center h-3 bg-slate-200 rounded-md`}
                            >
                                XL
                            </button>
                        </div>
                    </div>

                    <div className="quanty_wrap flex gap-6 itmes-center my-6">
                        <h2 className="text-xl font-medium">Quantity</h2>
                        <QuantityBox />
                    </div>
                    <div className="my-3 flex gap-6">
                        <p className="text-sm py-3 text-orange-400">
                            Free Delivery in 2-3 days.
                        </p>
                        <p className="flex gap-2 items-center text-sm text-slate-500 cursor-pointer hover:text-pink-400">
                            <CiHeart fontSize={20} />
                            Add To Wishlist
                        </p>
                        <p className="flex gap-2 items-center text-sm text-slate-500 cursor-pointer hover:text-pink-400">
                            <DiGitCompare fontSize={20} />
                            Add To Compare
                        </p>
                    </div>

                    <div className="addToCard">
                        <button className="rounded-md flex items-center gap-3 bg-slate-900 text-white py-3 px-6 uppercase hover:bg-green-600 hover:scale-105 transition-all duration-300">
                            {" "}
                            <AiFillShopping fontSize={25} /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailsInfo;
