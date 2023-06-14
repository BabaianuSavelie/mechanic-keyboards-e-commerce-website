import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Product } from "../../shared/types";

type ProductState = {
  cartItems: Product[];
  totalQuantity: number;
  totalAmount: number;
};

const initialState: ProductState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      productIndex >= 0
        ? state.cartItems[productIndex].quantity! + 1
        : state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart(state, action: PayloadAction<string>) {},
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
