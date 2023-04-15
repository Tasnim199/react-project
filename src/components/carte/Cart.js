import React from "react";
import { useSelector } from "react-redux";
import MealItem from "../repas/MealItem/MealItem";

export default function Cart() {
  const meals = useSelector((state) => state.cart.cart);

  return (
    <div>
      {meals.map((el) => (
        <MealItem
          id={el.id}
          name={el.name}
          description={el.description}
          prix={el.prix}
        />
      ))}
    </div>
  );
  <div>
  <button> confirm </button>
  <button> </button>
  </div>
}
