
import { Rating } from "@mui/material";
import QuantityBox from "../components/QuantityBox";
import { AiFillShopping } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";

const ProductDetailsInfo = ({product}) => {
    // const {title,} =product


    return (
        <>
            <div className="product_content flex flex-col px-6">
                <div className="mb-3">
                    <h2 className="font-bold text-2xl text-slate-800 mb-3">
                        {                           product.title
                        } <span className=" inline-block px-4 py-2 text-xs font-normal text-orange-800 bg-orange-100 rounded-md">
                        {product.brand}
                        Voya
                    </span>
                    </h2>
                    
                    <div className="my-2 flex items-center gap-2">
                        <Rating name="read-only" value={4} readOnly size="small" />
                      
                      ( {product.rating})
                        Ratings
                    </div>
                    <div className="in_stock my-3">
                        <p className="px-4 py-2 text-sm bg-green-100 inline-flex items-center gap-3 rounded-md text-green-800">
                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>{" "}
                            In Stock 
                        </p>

                        <span className="ml-5 text-slate-500 text-sm">
                            Available in Stock: ({product.stock}) Products
                        </span>
                    </div>

                    <div className="price py-3">
                        <div className="text-md">
                            <span className="text-gray-900 font-semibold ">${product.discountPercentage}</span>
                            <span className="line-through text-gray-500 px-2">${product.price}</span>
                            <span><small className="text-red-600">26% Off</small></span>
                        </div>
                    </div>
                    <div className="desc mt-3">
                        <p className="text-sm text-slate-500">
                            {product.description}
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
                            {product.warrantyInformation}
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
