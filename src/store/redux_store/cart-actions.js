import API_URL from "../../API";
import { uiActions } from "./uiSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendCartData = createAsyncThunk(
  "cart/sendCartData",
  async ({ userId, product }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      )
      const response = await fetch(`${API_URL}/cart${userId}`);
      if (!response.ok) {
        throw new Error("Could not fetch Cart Data");
      }
      const cartItems = await response.json();
      const existingItem = cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        const { _id, ...updatedItem } = existingItem;
        const putResponse = await fetch(`${API_URL}/cart${userId}/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...updatedItem,
            quantity: existingItem.quantity + 1,
          }),
        })
        if (!putResponse.ok) {
          throw new Error("Could not update cart.");
        }
      } else {
        const postResponse = await fetch(`${API_URL}/cart${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...product,
            quantity: 1,
          }),
        });
        if (!postResponse.ok) {
          throw new Error("Could not fetch Data");
        }
      }
      const updatedResponse = await fetch(`${API_URL}/cart${userId}`);
      if (!updatedResponse.ok) {
        throw new Error("Could not fetch updated cart!");
      }
      const updatedCart = await updatedResponse.json();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Item added to cart successfully."
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
      return updatedCart;
    }

    catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending request failed."
        }))
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
      return rejectWithValue(err.message);

    }
  }
)
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async (userId, { dispatch, rejectWithValue }) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Fetching...",
          message: "Fetching cart data!",
        })
      )
      const response = await fetch(`${API_URL}/cart${userId}`);
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const cartData = await response.json();
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

      return cartData;
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: err.message,
        })
      );
      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
      return rejectWithValue(err.message);
    }
  }

)
export const removeCartData = createAsyncThunk(
  "cart/removeCartData",
  async ({ userId, item }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Removing...",
          message: "Removing item from cart!",
        })
      );
      const response = await fetch(
        `${API_URL}/cart${userId}/${item._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      const updatedResponse = await fetch(`${API_URL}/cart${userId}`);
      if (!updatedResponse.ok) {
        throw new Error("Could not fetch updated cart!");
      }
      const updatedCart = await updatedResponse.json();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Item removed successfully.",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);
      return updatedCart;
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: err.message,
        })
      );

      setTimeout(() => {
        dispatch(uiActions.hideNotification());
      }, 2000);

      return rejectWithValue(err.message);
    }
  }
)

