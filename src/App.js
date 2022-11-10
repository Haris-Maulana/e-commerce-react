import "./App.scss";

import Navbar from "./component/00-Navbar/Navbar.js";
import Header from "./component/01-Header/Header.js";
import Main from "./component/02-Main/Main.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main/>
    </div>
  );
}

export default App;
