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
    console.log(cartFilter);
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
        <button className="quit-btn">
          X
        </button>
        {cartFilter.map((cartlist) => (
          <div className="userCartList" key={cartlist.quantity}>
            <div className="img-cart">
              <img src={cartlist.image} alt="" />
            </div>
            <div className="title-cart">
              <h4>{cartlist.Title}</h4>
            </div>
            <div className="quantity">
              <div className="quantityTitle">Quantity</div>
              <div className="quantityNum">{cartlist.quantity}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
