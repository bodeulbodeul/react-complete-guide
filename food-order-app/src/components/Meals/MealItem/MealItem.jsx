import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem(props) {
  const cardContext = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addHandler = (amount) => {
    const item = { ...props, amount };
    cardContext.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAdd={addHandler} />
      </div>
    </li>
  );
}
