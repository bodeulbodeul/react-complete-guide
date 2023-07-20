import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
  const removeHandler = (id) => {};
  const addHandler = (item) => {};

  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const cartItems = cartContext.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={removeHandler.bind(null, item.id)}
        onAdd={addHandler.bind(null, item)}
      />
    );
  });

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          닫기
        </button>
        {hasItems && <button className={classes.button}>주문</button>}
      </div>
    </Modal>
  );
}
