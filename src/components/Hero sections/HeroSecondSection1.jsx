import { IoPhonePortraitOutline, IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export const HeroSecondSection1 = () => {
  return (
    <>
      <div className="HeroSecondMain">
        <div className="categories">
          <div className="boxs"></div>
          <div className="categories-text">
            <h1>Categories</h1>
          </div>
        </div>

        <div className="categories-heading-section">
          <div className="categories-heading">
            <h1>Browse By Category</h1>
          </div>
          <div className="left-right-arrow1 right-left-arrow-section">
            <div className="left-arrow1 left-arrow">
              <FaArrowLeft className="left-arrow-icon1 left-arrow-icon" />
            </div>
            <div className="right-arrow1 right-arrow left-arrow">
              <FaArrowRight className=" left-arrow-icon1 left-arrow-icon " />
            </div>
          </div>
        </div>

        <div className="categories-card">
          <div className="category-box-1 category ">
            <IoPhonePortraitOutline className="phone-icon icon" />
            <p>phones</p>
          </div>
          <div className="category-box-2 category">
            <CiHeadphones className="headphone-icon icon" />
            <p>headphone</p>
          </div>
          <div className="category-box-3 category">
            <HiMiniComputerDesktop className="computer-icon icon" />
            <p>computer</p>
          </div>
          <div className="category-box-4 category">
            <BsSmartwatch className="watch-icon icon" />
            <p>smart watch</p>
          </div>
          <div className="category-box-5 category">
            <IoCameraOutline className="camera-icon icon" />
            <p>camera</p>
          </div>
          <div className="category-box-6 category">
            <SiYoutubegaming className="game-icon icon" />
            <p>game</p>
          </div>
        </div>
      </div>
      <div className="outline"></div>
    </>
  );
};
