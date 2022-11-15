import "./Main.scss";
import { useState } from "react";

const Main = ({handleClick, Title,itemList,searchTerm}) => {

  return (
    <main>

      <div className="grid-container">
      <h1>
        {Title}
      </h1>
        {itemList.filter((itemlist)=>{
          if(searchTerm === ''){
            return itemlist
          } else if (itemlist.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return itemlist
          }
        }).map((itemlist) => (
          <div key={itemlist.image} className="item-container">
            <div className="thumbnail-container">
              <img src={itemlist.image} alt="" />
              <div className="addcart">
                <button onClick={()=>{handleClick(itemlist)}}>+</button>
              </div>
            </div>
            <div className="item-desc">
              <div className="title">{itemlist.title}</div>
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
