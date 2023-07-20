import { useReducer } from "react";
import CartContext from "./cart-context";

const sumCalculator = (items) => {
  return items.reduce((prevCount, item) => {
    prevCount += item.amount;
  }, 0);
};

const cartReducer = (state, action) => {
  const { items, totalAmount } = state;
  const { type, item, id } = action;

  switch (type) {
    case "add_item":
      // const newItems = state.items.concat(action.item)
      // const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return { items: [item, ...items], totalAmount: totalAmount + item.price * item.amount };
    case "remove_item":
      const newItems = items.filter((item) => item.id !== id);
      return { items: newItems, totalAmount: sumCalculator(newItems) };
    default:
      return Error("Unknown action.");
  }
};

export default function CartProvider(props) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [], totalAmount: 0 });

  const addItemHandler = (item) => {
    cartDispatch({ type: "add_item", item });
  };

  const removeItemHandler = (id) => {
    cartDispatch({ type: "remove_item", id });
  };

  const { items, totalAmount } = cartState;

  const cartContext = {
    items,
    totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}
