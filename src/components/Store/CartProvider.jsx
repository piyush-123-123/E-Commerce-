import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
   

  if (action.type === "ADD_ITEM") {
     const existingCartItem = state.items.find(
  (item) => item.title === action.payload.title
);
if(!existingCartItem){
    return {
      items: [
  ...state.items,
  {
    ...action.payload,
    quantity: 1,
  },
],
    };
  }
const updatedItem = {
  ...existingCartItem,
  quantity: existingCartItem.quantity + 1,
};
return updatedItem;
}

  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemHandler,
    totalPrice:cartState.items.price
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;