import { createSlice } from "@reduxjs/toolkit";
import { sendCartData } from "./cart-actions";
import { fetchCartData } from "./cart-actions";
import {removeCartData} from "./cart-actions";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendCartData.fulfilled, (state, action) => {
      state.items = action.payload
    })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeCartData.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  }
});

export default cartSlice.reducer;
