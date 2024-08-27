import { useState } from "react";
import { Footer } from "../components/Footer";
import { TopHeader } from "../components/TopHeader";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const About = () => {
  const [isclicked, setIsclicked] = useState(true);
  const nav = useNavigate();
  return (
    <>
      <TopHeader />
      <div className="navigate-divs">
        <button
          className={!isclicked ? "active" : ""}
          onClick={() => {
            setIsclicked(false);
            nav("/");
          }}
        >
          home
        </button>
        /
        <button
          className={isclicked ? "active" : ""}
          onClick={() => {
            setIsclicked(true);
          }}
        >
          about
        </button>
      </div>
      <div className="out-story-sec">
        <div className="left-story-sec">
          <h1>our story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="right-story-sec">
          <figure>
            <img src="/public/images/ourstoryimages.png" alt="" />
          </figure>
        </div>
      </div>

      <div className="sale-section">
        <div className="box1 boxss">
          <figure>
            <img src="/public/images/Servicesincome.png" alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="box2 boxss">
          <figure>
            <img src="/public/images/Servicesincome2.png" alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="box3 boxss">
          <figure>
            <img src="/public/images/services.png" alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="box4 boxss">
          <figure>
            <img src="/public/images/servicesincome4.png" alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
      </div>

      <div className="photos-section sale-section">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          // navigatation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="boxphoto1 boxphoto">
              <figure>
                <img src="/public/images/person1.png" alt="" />
              </figure>
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>
              <div className="persons-social-icons">
                <FaInstagram className="instagram-icon" />
                <CiTwitter className="twitter-icon" />
                <FaLinkedinIn className="linkedin-icon" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="boxphoto1 boxphoto">
              <figure>
                <img src="/public/images/person2.png" alt="" />
              </figure>
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>
              <div className="persons-social-icons">
                <FaInstagram className="instagram-icon" />
                <CiTwitter className="twitter-icon" />
                <FaLinkedinIn className="linkedin-icon" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="boxphoto3 boxphoto">
              <figure>
                <img src="/public/images/person3.png" alt="" />
              </figure>
              <h1>Tom Cruise</h1>
              <p>Founder & Chairman</p>
              <div className="persons-social-icons">
                <FaInstagram className="instagram-icon" />
                <CiTwitter className="twitter-icon" />
                <FaLinkedinIn className="linkedin-icon" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="services-section">
        <div className="free-fast">
          <img src="/public/images/services1.png" alt="" />
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140 </p>
        </div>
        <div className="customer-service">
          <img src="/public/images/services2.png" alt="" />
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="moneyback">
          <img src="/public/images/services3.png" alt="" />
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
