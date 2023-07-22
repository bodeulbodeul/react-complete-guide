import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [isBump, setIsBump] = useState(false);

  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const totalAmount = items.reduce((prevCount, item) => (prevCount += item.amount), 0);

  const btnClasses = `${classes.button} ${isBump && classes.bump}`;

  useEffect(() => {
    items.length > 0 && setIsBump(true);
    const timer = setTimeout(() => setIsBump(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
}
