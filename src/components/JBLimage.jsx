import { CountDown } from "./CountDown";
import jblimage from "../assets/images/jbl_image.png";
import "./JBLimage.css";

export const JBLimage = () => {
  const deadline = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  return (
    <div className="jblmain">
      <div className="left-image-side">
        <div className="left-content">
          <h3>categories</h3>
          <h1>Enhance Your Music Experience</h1>
          <div className="countdown">
            <CountDown deadline={deadline} />
          </div>

          <button className="buy-now">Buy Now! </button>
        </div>
      </div>
      <div className="right-image-side">
        <figure>
          <img src={jblimage} alt="" />
        </figure>
      </div>
    </div>
  );
};
