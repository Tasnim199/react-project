import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      prix: props.prix,
    });
  };

  return (
    <li className="meal">
      <div>
        <h2>{props.name}</h2>
        <div className="description">{props.description}</div>
        <div className="prix">{props.prix}</div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
