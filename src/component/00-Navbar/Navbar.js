import "./Navbar.scss";
import Menu from "./../../Assets/interfaces/main-menu.png";
import Cart from "./../../Assets/interfaces/shopping-cart.png";
import { useState, useEffect } from "react";

const Navbar = ({
  cartNumber,
  cartFilter,
  onChangeInput,
  cartFunction,
  searchTerm,
  itemList
}) => {

  const Title = itemList.Title

  return (
    <>
      <nav>
        <div className="lt-side">H-commerce</div>
        <div className="md-side">
          <input
            type='search'
            placeholder="Search item..."
            name="name"
            onChange={onChangeInput}
            value={searchTerm}
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
        <button className="quit-btn" onClick={cartFunction}>
          X
        </button>
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
                <div className="quantityNum">{cartlist.quantity}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
