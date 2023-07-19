import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./components/Cart/CartContext";

function App() {
  const [isShowCart, setIsShowChart] = useState(false);

  const showCartHandler = () => {
    setIsShowChart(true);
  };

  const hideCartHandler = () => {
    setIsShowChart(false);
  };

  return (
    <>
      {isShowCart && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}
export default App;
