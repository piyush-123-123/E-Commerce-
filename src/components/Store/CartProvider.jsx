import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
   

  if (action.type === "SET_ITEMS") {
  return {
    items: action.payload,
  };
}
if (action.type === "REMOVE_ITEM") {
  return {
    items: state.items.filter(
      (item) => item._id !== action.payload
    ),
  };
}

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const setItemsHandler = (items) => {
  dispatchCartAction({
    type: "SET_ITEMS",
    payload: items,
  });
};
const removeItemHandler = (id) => {
  dispatchCartAction({
    type: "REMOVE_ITEM",
    payload: id,
  });
};
  
   const cartContext = {
    items: cartState.items,
    setItems: setItemsHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;