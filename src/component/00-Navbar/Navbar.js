import "./Navbar.scss";
import Menu from "./../../Assets/interfaces/main-menu.png";
import Cart from "./../../Assets/interfaces/shopping-cart.png";
import { createElement, useEffect } from "react";

const Navbar = ({ cartNumber, cart, cartFilter }) => {
  const root = document.querySelector(":root");
  const onChangeInput = () => {
    const inputSearch = document.querySelector("input");
    if (inputSearch.value != null) {
      root.style.setProperty("--display-header", "none");
    }
    if (inputSearch.value === "") {
      root.style.setProperty("--display-header", "flex");
    }
  };

  const cartFunction = () => {
    const getCart = getComputedStyle(root).getPropertyValue("--cart-visible");
    if (getCart === 'none') {
      root.style.setProperty("--cart-visible", "flex");
    } else {
      root.style.setProperty("--cart-visible", "none");
    }
  };

  return (
    <>
      <nav>
        <div className="lt-side">H-commerce</div>
        <div className="md-side">
          <input
            type="text"
            placeholder="Search item..."
            name="searh"
            onChange={onChangeInput}
          />
        </div>
        <div className="rt-side">
          <div className="cart" onClick={cartFunction}>
            <span>{cartNumber}</span>
            <img src={Cart} alt="" />
          </div>
        </div>
      </nav>
      <div className="user-cart">
        <button className="quit-btn" onClick={cartFunction}>X</button>
        {cartFilter.map((cartlist) => (
          <div key={cartlist.quantity * cartlist.prices + cartlist.quantity}>
            <div className="userCartList">
              <div className="img-cart">
                <img src={cartlist.image} alt="" />
              </div>
              <div className="title-cart">
                <h4>{cartlist.Title}</h4>
              </div>
              <div className="quantity">
                <div className="quantityTitle">Quantity</div>
                <div className="quantityNum">{cartlist.quantity}</div>{" "}
              </div>
            </div>
            <div className="testTotal">
              <div className="Total">
                <h6>Total</h6>
              </div>
              <div className="totalNum">
                {cartlist.prices * cartlist.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
