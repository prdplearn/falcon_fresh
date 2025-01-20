"use client"

import { FaChevronDown } from "react-icons/fa";
import { Collapse } from "react-collapse";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import { Rating } from "@mui/material";

const Sidebar = () => {
  const [isCollapseOpen, setisCollapseOpen] = useState(true);
  const [isAvailableOpen, setIsAvailableOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);

  return (
    <aside className="w-[20%]">
      <div className="pr-4 bg-slate-50 p-3 rounded-lg w-full">
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          <div className="relative flex flex-col pb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold mb-2.5">Categories </h3>
              <button onClick={() => setisCollapseOpen(!isCollapseOpen)}>
                {isCollapseOpen ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            <Collapse isOpened={isCollapseOpen}>
              <div className="scroll_box flex flex-col gap-5">
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Backpacks"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent  dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Backpacks"
                    />
                    <label
                      htmlFor="Backpacks"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Fashion
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Travel Bags"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Travel Bags"
                    />
                    <label
                      htmlFor="Travel Bags"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Electronics
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Laptop Sleeves"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Laptop Sleeves"
                    />
                    <label
                      htmlFor="Laptop Sleeves"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Customize Gift
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Organization"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Organization"
                    />
                    <label
                      htmlFor="Organization"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Birthday
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Accessories"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Accessories"
                    />
                    <label
                      htmlFor="Accessories"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Anniversary
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="relative flex flex-col pb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold mb-2.5 mt-6">Availibilty </h3>
              <button onClick={() => setIsAvailableOpen(!isAvailableOpen)}>
                {isAvailableOpen ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            <Collapse isOpened={isAvailableOpen}>
              <div className="scroll_box flex flex-col gap-5">
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Backpacks"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent  dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Backpacks"
                    />
                    <label
                      htmlFor="Backpacks"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Availble
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Travel Bags"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Travel Bags"
                    />
                    <label
                      htmlFor="Travel Bags"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        In Stock
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Laptop Sleeves"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Laptop Sleeves"
                    />
                    <label
                      htmlFor="Laptop Sleeves"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        Not Avalible
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div className="relative flex flex-col pb-8 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold mb-2.5 mt-6">Size </h3>
              <button onClick={() => setIsSizeOpen(!isSizeOpen)}>
                {isSizeOpen ? <FaChevronDown /> : <FaChevronUp />}
              </button>
            </div>

            <Collapse isOpened={isSizeOpen}>
              <div className="scroll_box flex flex-col gap-5">
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Backpacks"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent  dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Backpacks"
                    />
                    <label
                      htmlFor="Backpacks"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        S
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Travel Bags"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Travel Bags"
                    />
                    <label
                      htmlFor="Travel Bags"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        M
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Laptop Sleeves"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Laptop Sleeves"
                    />
                    <label
                      htmlFor="Laptop Sleeves"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        L
                      </span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="flex text-sm sm:text-base ">
                    <input
                      id="Laptop Sleeves"
                      className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                      type="checkbox"
                      name="Laptop Sleeves"
                    />
                    <label
                      htmlFor="Laptop Sleeves"
                      className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                    >
                      <span className="text-slate-900  text-sm font-normal ">
                        XL
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>

          <div className="range_price w-full py-6 relative flex flex-col pb-8 space-y-4">
            <h3 className="font-semibold  ">Size </h3>
            <p className="mb-2.5">$100 - $500</p>
            <RangeSlider min={0} />
          </div>

          {/* <div className="range_price w-full py-6 relative flex flex-col pb-8 space-y-4">
            <h3 className="font-semibold  ">Rating </h3>
            <div className="rate flex flex-col gap-3">
              <Rating name="read-only" value={5} readOnly />
              <Rating name="read-only" value={4} readOnly />
              <Rating name="read-only" value={3} readOnly />
              <Rating name="read-only" value={2} readOnly />
              <Rating name="read-only" value={1} readOnly />
            </div>
          </div> */}

          <div className="relative flex flex-col py-8 space-y-4">
            <h3 className="font-semibold mb-2.5">Sort order</h3>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Most-Popular"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Most-Popular"
                name="radioNameSort"
              />
              <label
                htmlFor="Most-Popular"
                className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
              >
                Most Popular
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Best-Rating"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Best-Rating"
                name="radioNameSort"
              />
              <label
                htmlFor="Best-Rating"
                className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
              >
                Best Rating
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Newest"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Newest"
                name="radioNameSort"
              />
              <label
                htmlFor="Newest"
                className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
              >
                Newest
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Price-low-hight"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Price-low-hight"
                name="radioNameSort"
              />
              <label
                htmlFor="Price-low-hight"
                className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
              >
                Price Low - Hight
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Price-hight-low"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Price-hight-low"
                name="radioNameSort"
              />
              <label
                htmlFor="Price-hight-low"
                className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
              >
                Price Hight - Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
