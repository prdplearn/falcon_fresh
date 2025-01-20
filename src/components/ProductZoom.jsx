"use client";

import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductZoom = () => {
  // State to manage the main image
  const [mainImage, setMainImage] = useState(
    "https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-single-img-1.jpg"
  );

  // Array of product images
  const productImages = [
    "https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-single-img-1.jpg",
    "https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-single-img-2.jpg",
    "https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-single-img-3.jpg",
    "https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-single-img-4.jpg",
  ];

  return (
    <div className="flex flex-col gap-2">
      {/* Main image viewer */}
      <div className="img_container w-full rounded-lg overflow-hidden">
        <InnerImageZoom src={mainImage} zoomType="hover" zoomScale={1} className="object-cover" />
      </div>

      {/* Thumbnail slider */}
      <div className="w-full px-3  py-2">
        <Swiper
          slidesPerView={6}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="zoomProduct_slider"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className={`cursor-pointer border ${
                  mainImage === image ? "border-teal-500" : "border-transparent"
                } rounded-md`}
                onClick={() => setMainImage(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
