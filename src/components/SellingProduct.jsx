import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SellingProduct = () => {
  const { products, productCount } = useSelector((state) => state.product);
  const [viewall, setViewall] = useState(false);
  const nav = useNavigate();
  const { id } = useParams();

  const HandleviewClick = () => {
    setViewall(!viewall);
  };

  return (
    <div className="selling-section HeroSecondMain">
      <div className="selling-section-heading categories">
        <div className="boxs"></div>
        <div className="this-month-text categories-text">
          <h1>this month</h1>
        </div>
      </div>

      <div className=" selling-sec-section ">
        <div className="selling-head categories-heading">
          <h1>Best Selling Products</h1>
        </div>
        <button className="selling-view-all-btn " onClick={HandleviewClick}>
          {viewall ? "show less" : "view all"}
        </button>
      </div>

      <div className=" selling-product products">
        {viewall ? (
          <div className="product-grid">
            {productCount > 0 &&
              products.map((products) => (
                <li
                  onClick={() => nav(`/productdetail/${id}`)}
                  key={products.id}
                  className="selling-product-card  product-card "
                >
                  <figure className=" selling-product-image  product-image">
                    <div className="discount">-40%</div>
                    <div className="view-icon">
                      <IoEyeOutline className="eye-icon" />
                      <CiHeart className="heart" />
                    </div>
                    <img src={products.image} alt="" />
                    <h1>add to cart</h1>
                  </figure>
                  <h1>{products.title}</h1>
                  <p>${products.price}</p>
                </li>
              ))}
          </div>
        ) : (
          <Swiper
            className="swiper"
            spaceBetween={0}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            modules={[Pagination, Navigation]}
          >
            {productCount > 0 &&
              products.map((products) => (
                <SwiperSlide key={products.id}>
                  <li
                    className="selling-product-card  product-card"
                    onClick={() => nav(`/productdetail/${id}`)}
                  >
                    <figure className=" selling-product-image  product-image">
                      <div className="discount">-40%</div>
                      <div className="view-icon">
                        <IoEyeOutline className="eye-icon" />
                        <CiHeart className="heart" />
                      </div>
                      <img src={products.image} alt="" />
                      <h1>add to cart</h1>
                    </figure>
                    <h1>{products.title}</h1>
                    <p>${products.price}</p>
                  </li>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
