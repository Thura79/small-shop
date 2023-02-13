import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    fav: [],
    cart: []
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    favitem: (state, action) => {
      const item = action.payload;
      const filteritem = state.fav.find((f) => f.id === item.id);
      if (filteritem) {
        state.fav.map((f) => (f.id === item.id ? { ...item } : { ...f }));
      } else {
        state.fav.push(item);
      }
    },
    removefav: (state, action) => {
      state.fav = state.fav.filter((f) => f.id !== action.payload.id);
    },
    addcart: (state, action) => {
      // state.push({...action.payload, qty: 1})
      const item = action.payload;
      const isExist = state.cart.find((f) => f.id === item.id);
      if (isExist) {
        state.cart.map((f) =>
          f.id === item.id ? { ...item, qty: 1 } : { ...f }
        );
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },
    toggle: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { getProducts, favitem, removefav, addcart, toggle } = productSlice.actions;
export default productSlice.reducer;
