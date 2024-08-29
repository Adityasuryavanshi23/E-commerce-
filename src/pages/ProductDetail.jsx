import { SwiperComponent } from "../components/SwiperComponent";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/ProductsDetail.css";
import { setProductDetail } from "../store/slices/productDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import deliveryicon from "../assets/images/icon-delivery.png";
import returndelivery from "../assets/images/Icon-return.png";

export const ProductDetail = () => {
  const [count, setCount] = useState(1);

  const HandleCount = () => {
    setCount(count + 1);
  };

  const productDetail = useSelector((state) => state.productDetail.products);
  const { id } = useParams();
  console.log(id);
  console.log(productDetail);

  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProductDetail(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
  }, [id]);

  const { title, price, description, image } = productDetail;

  return (
    <>
      {Object.keys(productDetail).length > 0 && (
        <div className="products-detail">
          <div className="products-breakdown">
            <div className="breakdown-boxes">
              <img src={image} alt={title} />
            </div>
            <div className="breakdown-boxes">
              <img src={image} alt={title} />
            </div>
            <div className="breakdown-boxes">
              <img src={image} alt={title} />
            </div>
            <div className="breakdown-boxes">
              <img src={image} alt={title} />
            </div>
          </div>

          <div className="products-image">
            <figure>
              <img src={image} alt={title} />
            </figure>
          </div>

          <div className="products-discription">
            <h1>{title}</h1>
            <p>${price}</p>
            <p className="description">{description}</p>
            <hr />
            <div className="colors">
              <div className="h1">colours: </div>
              <div className="circles">
                <div className="circle1"></div>
                <div className="circle2"></div>
              </div>
            </div>

            <div className="sizes">
              <div className="size">size: </div>
              <div className="size-boxes">
                <div className="size-box cursor">XS</div>
                <div className="size-box cursor">s</div>
                <div className="size-box cursor">m</div>
                <div className="size-box cursor">l</div>
                <div className="size-box cursor">xl</div>
              </div>
            </div>
            <div className="observe-content">
              <div className="quantities-sec">
                <button
                  className="minus cursor"
                  disabled={count === 1}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <p>{count}</p>
                <button className="plus cursor" onClick={HandleCount}>
                  +
                </button>
              </div>
              <button className="buys-now cursor">buy now</button>
              <div className="heart-div ">
                <CiHeart className="hearts cursor" />
              </div>
            </div>

            <div className="delivery-section">
              <div className="free-delivery">
                <figure>
                  <img src={deliveryicon} alt="" />
                </figure>
                <div className="free-delivery-message">
                  <h1>Free Delivery</h1>
                  <p>Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
              <hr />
              <div className="return-delivery">
                <figure>
                  <img src={returndelivery} alt="" />
                </figure>
                <div className="return-delivery-message">
                  <h1>Return Delivery</h1>
                  <p>Free 30 Days Delivery Returns. details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="related-item">
        <div className="today-msg">
          <div className="box"></div>
          <div className="today-text">
            <h1>Related Items</h1>
          </div>
        </div>
        <div className="products">
          <SwiperComponent />
        </div>
      </div>
    </>
  );
};
