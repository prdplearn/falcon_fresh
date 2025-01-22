"use client"

import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="product_accordian mt-6 rounded-md">
        <div className="flex accordian-header gap-6 mb-4 border-b border-slate-100">
          <div className="item">
            <h3
              className={`p-3 px-6 py-2 text-md cursor-pointer ${
                activeTab === 0
                  ? "border-b-2 border-green-500 text-green-500 font-semibold"
                  : "text-slate-400"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </h3>
          </div>
          <div className="item">
            <h3
              className={`p-3 px-6 py-2 text-md cursor-pointer ${
                activeTab === 1
                  ? "border-b-2 border-green-500 text-green-500 font-semibold"
                  : "text-slate-400"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Addition Information
            </h3>
          </div>
          <div className="item">
            <h3
              className={`p-3 px-6 py-2 text-md cursor-pointer ${
                activeTab === 2
                  ? "border-b-2 border-green-500 text-green-500 font-semibold"
                  : "text-slate-400"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Review (5)
            </h3>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 0 && (
          <div className="accordian-content shadow py-6 px-6 rounded-md transition-all duration-100">
            <h2>Nutrient Value & Benefits</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
              sagittis pellentesque. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Nullam tristique
              neque at tortor vulputate, vel vulputate orci commodo. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Duis mattis accumsan mi eu porta. Nam nec luctus
              diam. Proin sed magna sollicitudin ex pretium rhoncus et a lorem.
            </p>
            <h2>Storage Tips</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis
              sagittis pellentesque. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Nullam tristique
              neque at tortor vulputate, vel vulputate orci commodo. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae; Duis mattis accumsan mi eu porta. Nam nec luctus
              diam. Proin sed magna sollicitudin ex pretium rhoncus et a lorem.
            </p>
          </div>
        )}

        {activeTab === 1 && (
          <div className="accordian-content shadow py-6 px-6 rounded-md transition-all duration-100">
            <p className="font-bold text-orange-400">Addition Information</p>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Specification
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro
                    </th>
                    <td className="px-6 py-4">Silver</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="accordian-content shadow py-6 px-6 rounded-md transition-all duration-100">
            <p className="text-2xl font-bold">Customer`s Reviews</p>
            <div className="Scroll__Y max-h-[300px] overflow-y-auto overflow-x-hidden w-full">
              {/* Reviews Section */}
            </div>
            <div className="reviewForm">
              <h2>Add a Review</h2>
              <textarea
                className="border border-teal-500 w-full rounded-md min-h-[200px]"
              ></textarea>
              <div className="py-4">
                <Rating name="read-only" value={4} />
              </div>
              <button className="rounded-md flex items-center gap-3 bg-slate-900 text-white py-3 px-6 uppercase hover:bg-green-600 hover:scale-105 transition-all duration-300">
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductTab;
