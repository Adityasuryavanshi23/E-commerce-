import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './slices/productsSlice'
import  cartSlice  from './slices/cartSlice'
import  productDetailSlice  from './slices/productDetail'
import  wishlistSlice  from './slices/wishlist'


export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    productDetail: productDetailSlice,
    wishlist :wishlistSlice
  },
  devTools: true,
})