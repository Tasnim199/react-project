import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Plats from "./components/repas/Plats";
import PlatsDisponibles from "./components/repas/PlatsDisponibles";
import MealSummary from "./components/repas/MealSummary";
import MealItem from "./components/repas/MealItem/MealItem";
import MealItemForm from "./components/repas/MealItem/MealItemForm";
import Card from "./components/userinterface/Card";
import Input from "./components/userinterface/Input";
import Modal from "./components/userinterface/Modal";

import Cart from "./components/Cart/Carte";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main>
        <Plats />
      </main>
    </CartProvider>
  );
}

export default App;
