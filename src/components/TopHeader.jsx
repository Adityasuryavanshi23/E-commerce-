import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const TopHeader = () => {
  const nav = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <header>
        <div className="top-heading">
          <div className="message-content-top">
            <div className="top-message-content">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span className="shop-now">shop now</span>
            </div>
            <p className="language">
              english <FaChevronDown className="down-arrow" />
            </p>
          </div>
        </div>

        <div className="main-header">
          <div className="exculisvetext">
            <h1 onClick={() => nav("/")}>exclusive</h1>
          </div>
          <ul className="menus">
            <li onClick={() => nav("/")}>home</li>
            <li onClick={() => nav("/contact")}>contact</li>
            <li onClick={() => nav("/about")}>about</li>
            <li onClick={() => nav("/signup")}>sign up</li>
          </ul>
          <div className="search-icon-cart-icon">
            <div className="search-bar">
              <input type="text" placeholder="What are you looking for?" />
              <IoSearchOutline className="search-icon" />
            </div>
            <div className="icons">
              <CiHeart className="heart-icon" />
              <div className="carticon">
                <div className="items">{cart.length}</div>
                <IoCartOutline
                  className="cart-icon cursor"
                  onClick={() => nav("/cart")}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <hr />
    </>
  );
};
