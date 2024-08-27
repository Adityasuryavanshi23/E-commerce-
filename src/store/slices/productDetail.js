import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setProductDetail: (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setProductDetail } = productDetailSlice.actions;

export default productDetailSlice.reducer;
