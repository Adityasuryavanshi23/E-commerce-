import "./NewArrival.css";
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
              <img src="/public/images/playsstationimage.png" alt="" />
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
                <img src="/public/images/womens collection.png" alt="" />
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
                  <img src="/public/images/speaker.png" alt="" />
                </figure>
                <div className="speaker-content">
                  <h1>speakers</h1>
                  <p>Amazon wireless speakers</p>
                  <a href="#">shop now</a>
                </div>
              </div>
              <div className="perfume">
                <figure>
                  <img src="/public/images/perfume.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};
