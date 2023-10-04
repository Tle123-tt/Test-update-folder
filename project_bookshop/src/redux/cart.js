import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const cartItems = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (cartItems) {
        cartItems.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removetoCart: (state, action) => {
      const removetoCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removetoCart;
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    dectrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      }
      if (item.quantity === 0) {
        item.quantity = 0;
      } else { 
        item.quantity--;
      }
    },
  },
});

export default cart.reducer;
export const {
  addtoCart,
  removetoCart,
  incrementQuantity,
  dectrementQuantity,
} = cart.actions;
