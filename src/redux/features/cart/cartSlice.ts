// src/redux/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem, TProduct } from "@/types/types";

interface CartState {
  cart: TCartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const item = state.cart.find(
        (item) => item._id === action.payload.productId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
