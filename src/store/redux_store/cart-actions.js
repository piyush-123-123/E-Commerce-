import API_URL from "../../API";
import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData = (userId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data!",
      })
    );

    const fetchData = async () => {
      const response = await fetch(`${API_URL}/cart${userId}`);

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      return await response.json();
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.setItems(cartData));

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data loaded successfully.",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed.",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
    }
  };
};