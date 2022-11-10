import "./App.scss";
import { useState, useEffect } from "react";

import Navbar from "./component/00-Navbar/Navbar.js";
import Header from "./component/01-Header/Header.js";
import Main from "./component/02-Main/Main.js";

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (itemlist) => {
    console.log(itemlist);
    cart.push(itemlist);
    console.log(cart);
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main handleClick={handleClick} />
    </div>
  );
}

export default App;
