import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";
import { cancatString } from "../utils";
import RemoveIcon from "../assets/icon-cancel.svg";
import "../pages/Cart.css";

export const Cart = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  console.log(cart, "adiyta");
  const [isclicked, setIsclicked] = useState(true);

  const handleclick = (id) => {
    const filter = cart.filter((currelem) => currelem.id !== id);
    console.log(filter);
    dispatch(updateCart(filter));
  };
  const handleQuantity = (id, value) => {
    console.log(id, parseInt(value));
    dispatch(
      updateCart(
        cart.map((cart) =>
          cart.id === id
            ? {
                ...cart,
                quantity: isNaN(parseInt(value)) ? 1 : parseInt(value),
              }
            : cart
        )
      )
    );
  };

  const total = useMemo(
    () =>
      cart?.reduce((prev, curr) => {
        return curr.price * curr.quantity + prev;
      }, 0),
    [cart]
  );
  return (
    <>
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
          cart
        </button>
      </div>

      <table className="cart-table">
        <thead>
          <tr className="item-head">
            <th className="cartproduct">product</th>
            <th className="price">price</th>
            <th className="quantity">quantity</th>
            <th className="subtotal">subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cart) => (
            <tr key={cart.id} className="cart-info">
              <td className="item-img">
                <img
                  onClick={() => handleclick(cart.id)}
                  src={RemoveIcon}
                  className="removeicon"
                />
                <img src={cart.image} alt={cart.title} />
                <p>{cancatString(cart.title)}</p>
              </td>
              <td className="cart-price">${cart.price.toFixed(2)}</td>
              <td className="quantity">
                <input
                  onChange={(e) => {
                    handleQuantity(cart.id, e.target.value);
                  }}
                  type="number"
                  min={1}
                  value={cart.quantity}
                  className="quantity-input"
                ></input>
              </td>
              <td className="cart-subtotal">
                ${(cart.price * cart.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="shops-buttons">
        <button className="btn1 cursor" onClick={() => nav("/")}>
          return to shop
        </button>
        <button className="btn2 cursor">upadate cart</button>
      </div>

      <div className="item-summary">
        <div className="coupon-section">
          <input type="text" placeholder="coupon code" />
          <button className="coupan-btn cursor">appply coupon</button>
        </div>
        <div className="item-total-section">
          <h1>cart total</h1>
          <div className="subtotal-div">
            <p>subtotal:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="shipping-div">
            <p>shipping:</p>
            <p>$0</p>
          </div>
          <div className="total-div">
            <p>total:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="proceed-btn cursor">proceed to checkout</button>
        </div>
      </div>
    </>
  );
};
