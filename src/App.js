import "./App.scss";
import { useState, useEffect } from "react";

import Navbar from "./component/00-Navbar/Navbar.js";
import Header from "./component/01-Header/Header.js";
import Main from "./component/02-Main/Main.js";
import Whatsapp from "./component/03-Whatsapp/Whatsapp";
import Footer from './component/04-Footer/Footer.js'

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
      <Main handleClick={handleClick} title={'Best Item'}/>
      <Whatsapp/>
      <Main handleClick={handleClick} title={'Popular Item'}/>
      <Footer/>
    </div>
  );
}

export default App;
