import { useDispatch } from "react-redux";
import PlatsDisponibles from "../PlatsDisponibles";
import { Add } from "../../../store/cartSlice";
const MealItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li className="meal">
      <div>
        <h2> {props.name}</h2>
      </div>
      <div className="description"> {props.description}</div>
      <div className="prix">{props.prix}</div>

      <button
        onClick={() => {
          dispatch(
            Add({
              name: props.name,
              id: props.id,
              description: props.description,
              prix: props.prix,
            })
          );
        }}
      >
        Add to cart
      </button>
    </li>
  );
};
export default MealItem;
