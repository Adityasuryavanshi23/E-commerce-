import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SwiperComponent } from "./SwiperComponent";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ProductsSection = () => {
  return (
    <div className="products-sec  HeroSecondMain">
      <div className="our-products categories">
        <div className="boxs"></div>
        <div className="products-text categories-text">
          <h1>our products</h1>
        </div>
      </div>

      <div className="explore-product-section">
        <div className="explore-heading categories-heading">
          <h1>Explore Our Products</h1>
        </div>
        <div className=" our-product-arrow-sec right-left-arrow-section">
          <div className="left-arrow swiper-prev">
            <FaArrowLeft className="left-arrow-icon" />
          </div>

          <div className="right-arrow left-arrow swiper-next">
            <FaArrowRight className="left-arrow-icon" />
          </div>
        </div>
      </div>

      <div className="product">
        <SwiperComponent />
      </div>
    </div>
  );
};
