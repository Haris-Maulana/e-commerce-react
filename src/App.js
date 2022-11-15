import "./App.scss";
import { useState, useEffect } from "react";

import Navbar from "./component/00-Navbar/Navbar.js";
import Header from "./component/01-Header/Header.js";
import Main from "./component/02-Main/Main.js";
import Whatsapp from "./component/03-Whatsapp/Whatsapp";
import Footer from "./component/04-Footer/Footer.js";
import { itemList } from "./component/02-Main/Aimage.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const cartFilter = cart.filter((item, Title) => cart.indexOf(item) === Title);

  const handleClick = (itemlist) => {
    cart.push(itemlist);
    itemlist.quantity += 1;
    setCartNumber(cartNumber + 1);
  };

  const root = document.querySelector(":root");
  const onChangeInput = (event) => {
    event.preventDefault();
    const inputSearch = document.querySelector("input");
    setSearchTerm(event.target.value);
    console.log('value is', event.target.value)
    if (inputSearch.value != '') {
      root.style.setProperty("--display-header", "none");
    } else {
      root.style.setProperty("--display-header", "flex");
    }
  };

  const cartFunction = () => {
    const getCart = getComputedStyle(root).getPropertyValue("--cart-visible");
    if (getCart === "none") {
      root.style.setProperty("--cart-visible", "flex");
    } else {
      root.style.setProperty("--cart-visible", "none");
    }
  };

  return (
    <div className="App">
      <Navbar
        cartNumber={cartNumber}
        onChangeInput={onChangeInput}
        cartFunction={cartFunction}
        cartFilter={cartFilter}
        searchTerm={searchTerm}
        itemList={itemList}
      />
      <Header />
      <Main handleClick={handleClick} Title={"Best Item"} itemList={itemList} searchTerm={searchTerm}/>
      <Main
        handleClick={handleClick}
        title={"Popular Item"}
        itemList={itemList}
        searchTerm={searchTerm}
      />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
