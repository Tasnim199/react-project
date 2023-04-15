import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import HeaderButton from "./components/layout/HeaderButton";
import PlatsDisponibles from "./components/repas/PlatsDisponibles";
import MealItem from "./components/repas/MealItem/MealItem";
import MealSummary from "./components/repas/MealSummary";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/carte/Cart";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MealItem />
              <PlatsDisponibles />
            </div>
          }
        />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
