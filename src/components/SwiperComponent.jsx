import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { setCart } from "../store/slices/cartSlice.js";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SwiperComponent = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { products, productCount } = useSelector((state) => state.product);

  const [viewall, setViewall] = useState(false);
  const handleViewClick = () => {
    setViewall(!viewall);
  };

  const addtocart = (product) => {
    dispatch(setCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      {viewall ? (
        <div className="product-grid">
          {productCount > 0 &&
            products.map(({ id, image, title, price }) => (
              <li key={id} className="selling-product-card  product-card">
                <figure className="selling-product-image product-image">
                  <div className="discount">-40%</div>
                  <div className="view-icon">
                    <IoEyeOutline className="eye-icon" />
                    <CiHeart className="heart" />
                  </div>

                  <img
                    src={image}
                    alt={title}
                    onClick={() => nav(`/productdetail/${id}`)}
                  />
                  <h1 onClick={() => addtocart({ id, image, title, price })}>
                    add to cart
                  </h1>
                </figure>
                <h1>{title}</h1>
                <p>${price}</p>
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
            products.map(({ id, image, title, price }) => (
              <SwiperSlide key={id}>
                <li className="selling-product-card product-card">
                  <figure className="selling-product-image product-image">
                    <div className="discount">-40%</div>
                    <div className="view-icon">
                      <IoEyeOutline className="eye-icon" />
                      <CiHeart className="heart" />
                    </div>
                    <img
                      src={image}
                      alt={title}
                      onClick={() => nav(`/productdetail/${id}`)}
                    />
                    <h1 onClick={() => addtocart({ id, image, title, price })}>
                      add to cart
                    </h1>
                  </figure>
                  <h1>{title}</h1>
                  <p>${price}</p>
                </li>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <button className="view-all-btn" onClick={handleViewClick}>
        {viewall ? "show less" : "view all products"}
      </button>
    </>
  );
};
