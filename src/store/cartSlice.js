import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: "m4",
      name: "Plat escalope",
      description: "riz , salade grillée , frites , escalope panné",
      prix: "18.600DT",
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { Add } = cartSlice.actions;

export default cartSlice.reducer;
