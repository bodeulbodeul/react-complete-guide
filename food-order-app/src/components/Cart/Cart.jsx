import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import DUMMY from "./dummy-cart.json";

export default function Cart(props) {
  const removeHandler = () => {};
  const addHandler = () => {};

  const cartItems = DUMMY.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={removeHandler}
        onAdd={addHandler}
      />
    );
  });

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          닫기
        </button>
        <button className={classes.button}>주문</button>
      </div>
    </Modal>
  );
}
