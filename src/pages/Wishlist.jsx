import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateWishlist } from "../store/slices/wishlist";
import { setCart } from "../store/slices/cartSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { SwiperComponent } from "../components/Products/SwiperComponent";
import "../pages/Wishlist.css";
export const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleclick = (id) => {
    const filter = wishlist.filter((currelem) => currelem.id !== id);
    console.log(filter);
    dispatch(updateWishlist(filter));
  };

  const addtocart = (product) => {
    dispatch(setCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className="wishlist">
        <h1 className="wishlist-heading"> Wishlist ({wishlist.length})</h1>
        {wishlist.length > 0 ? (
          <ul className="wishlist-items">
            {wishlist.map((product) => (
              <li
                key={product.id}
                className="selling-product-card product-card"
              >
                <figure className="wishlist-figure selling-product-image product-image">
                  <MdOutlineDeleteForever
                    className="delete-icon"
                    onClick={() => handleclick(product.id)}
                  />

                  <div className="discount">-40%</div>
                  <img
                    src={product.image}
                    alt={product.title}
                    onClick={() => nav(`/productdetail/${product.id}`)}
                  />
                  <h1 onClick={() => addtocart(product)}>add to cart</h1>
                </figure>
                <h1>{product.title}</h1>
                <p>${product.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-msg">Your wishlist is empty.</p>
        )}
      </div>

      <div className="just-for-you">
        <div className="today-msg">
          <div className="box"></div>
          <div className=" text today-text">
            <h1>Just For You</h1>
          </div>
        </div>
        <div className="products">
          <SwiperComponent className="wishlist-swiper" />
        </div>
      </div>
    </>
  );
};
