import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CountDown } from "../Countdown/CountDown";
import { SwiperComponent } from "../Products/SwiperComponent";
import "./HeroSecondSection.css";

export const HeroSecondSection = () => {
  const deadline = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <>
      <div className="main-hero-section">
        <div className="today-msg">
          <div className="box"></div>
          <div className="today-text">
            <h1>Today’s</h1>
          </div>
        </div>

        <div className="Flash-sales">
          <div className="timer-section">
            <h1 className="flash-heading">Flash sales</h1>
            <CountDown deadline={deadline} />
          </div>

          <div className="right-left-arrow-section">
            <div className="left-arrow swiper-prev cursor">
              <FaArrowLeft className="left-arrow-icon " />
            </div>

            <div className="right-arrow swiper-next cursor">
              <FaArrowRight className="right-arrow-icon " />
            </div>
          </div>
        </div>

        <div className="products">
          <SwiperComponent />
        </div>
      </div>

      <div className="outline"></div>
    </>
  );
};
