import "./Main.scss";
import { itemList } from "./Aimage.js";
import { useState } from "react";

const Main = ({handleClick}) => {

  return (
    <main>
      <h1>
        Best Item
      </h1>

      <div className="grid-container">
        {itemList.map((itemlist) => (
          <div key={itemlist.image} className="item-container">
            <div className="thumbnail-container">
              <img src={itemlist.image} alt="" />
              <div className="addcart">
                <button onClick={()=>{handleClick(itemlist)}}>+</button>
              </div>
            </div>
            <div className="item-desc">
              <div className="title">{itemlist.Title}</div>
              <div className="desc">
                {itemlist.description}
                <div className="prices">{itemlist.prices}$</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
