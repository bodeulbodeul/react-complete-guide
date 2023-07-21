import { useReducer } from "react";
import CartContext from "./cart-context";

const sumCalculator = (items) => {
  return items.reduce((prevPrice, item) => (prevPrice += item.price * item.amount), 0);
};

const cartReducer = (state, action) => {
  const { items } = state;
  const { type, item, id } = action;
  let updatedItems = [...items];

  switch (type) {
    case "add_item":
      const existItemIndex = items.findIndex((_item) => _item.id === item.id);
      const oldItem = items[existItemIndex];
      if (oldItem) {
        updatedItems[existItemIndex] = { ...oldItem, amount: oldItem.amount + item.amount };
      } else {
        updatedItems = [...items, item];
      }

      return { items: updatedItems, totalAmount: sumCalculator(updatedItems) };

    case "remove_item":
      const targetItemIndex = items.findIndex((item) => item.id === id);
      const targetItem = updatedItems[targetItemIndex];
      const { amount } = targetItem;

      if (amount === 1) {
        // 아이템 삭제
        updatedItems = items.filter((item) => item.id !== id);
      } else {
        // 수량 감소
        updatedItems[targetItemIndex] = { ...targetItem, amount: targetItem.amount - 1 };
      }

      return { items: updatedItems, totalAmount: sumCalculator(updatedItems) };
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
