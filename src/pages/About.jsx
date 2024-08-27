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
import ourstory from "../assets/images/ourstoryimages.png";
import servicesincome from "../assets/images/Servicesincome.png";
import servicesincome2 from "../assets/images/Servicesincome2.png";
import services from "../assets/images/Services.png";
import servicesincome4 from "../assets/images/Servicesincome4.png";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import services1 from "../assets/images/Services1.png";
import services2 from "../assets/images/Services2.png";
import services3 from "../assets/images/Services3.png";

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
            <img src={ourstory} alt="" />
          </figure>
        </div>
      </div>

      <div className="sale-section">
        <div className="box1 boxss">
          <figure>
            <img src={servicesincome} alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="box2 boxss">
          <figure>
            <img src={servicesincome2} alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="box3 boxss">
          <figure>
            <img src={services} alt="" />
          </figure>
          <h1>10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="box4 boxss">
          <figure>
            <img src={servicesincome4} alt="" />
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
                <img src={person1} alt="" />
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
                <img src={person2} alt="" />
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
                <img src={person3} alt="" />
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
          <img src={services1} alt="" />
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140 </p>
        </div>
        <div className="customer-service">
          <img src={services2} alt="" />
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="moneyback">
          <img src={services3} alt="" />
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
