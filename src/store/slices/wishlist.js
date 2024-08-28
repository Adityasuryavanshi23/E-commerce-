import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      console.log(action.payload);
      const data = [...state.wishlist, action.payload];
      state.wishlist = data;
      localStorage.setItem('wishlist', JSON.stringify(data));
    },
    updateWishlist: (state, action) => {
      console.log(action.payload);
      state.wishlist = action.payload;
      localStorage.setItem('wishlist', JSON.stringify(action.payload));
    },
  },
});

export const { addToWishlist, updateWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
