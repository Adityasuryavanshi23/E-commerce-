/* eslint-disable react/no-unescaped-entities */
import iphone from "../../assets/images/Frame 560.png";
export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-menu-section">
        <ul className="Categories">
          <li>Woman’s Fashion </li>
          <li>Men’s Fashion</li>
          <li>electronics</li>
          <li>homes and lifestyles</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="right-hero-section">
        <figure>
          <img src={iphone} alt="" />
        </figure>
      </div>
    </div>
  );
};
