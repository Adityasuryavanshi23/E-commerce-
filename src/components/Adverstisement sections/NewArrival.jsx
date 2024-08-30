import "./NewArrival.css";
import playstation from "../../assets/images/playsstationimage.png";
import womencollection from "../../assets/images/womens collection.png";
import speakers from "../../assets/images/speaker.png";
import perfumes from "../../assets/images/perfume.png";
import services1 from "../../assets/images/Services1.png";
import services2 from "../../assets/images/Services2.png";
import services3 from "../../assets/images/Services3.png";

export const NewArrival = () => {
  return (
    <>
      <div className="NewArrival-main">
        <div className="Feature-sec categories">
          <div className="boxs"></div>
          <div className="feature-text categories-text">
            <h1>featured</h1>
          </div>
        </div>

        <div className="Arrival-heading categories-heading">
          <h1>New Arrival</h1>
        </div>

        <div className="Newarrival-images-sec">
          <div className="left-arrival-image">
            <figure>
              <img src={playstation} alt="" />
            </figure>
            <div className="arrival-content">
              <h1>playStation 5 </h1>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="#">shop now</a>
            </div>
          </div>
          <div className="right-arrival-image">
            <div className="women-collection">
              <figure>
                <img src={womencollection} alt="" />
              </figure>
              <div className="arrival-content">
                <h1>Women’s Collections</h1>
                <p>Featured woman collections that give you another vibe.</p>
                <a href="#">shop now</a>
              </div>
            </div>

            <div className="down-image-sec">
              <div className="speaker">
                <figure>
                  <img src={speakers} alt="" />
                </figure>
                <div className="speaker-content">
                  <h1>speakers</h1>
                  <p>Amazon wireless speakers</p>
                  <a href="#">shop now</a>
                </div>
              </div>
              <div className="perfume">
                <figure>
                  <img src={perfumes} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};
