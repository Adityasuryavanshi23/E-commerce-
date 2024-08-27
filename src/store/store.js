import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './slices/productsSlice'
import  cartSlice  from './slices/cartSlice'
import  productDetailSlice  from './slices/productDetail'


export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    productDetail: productDetailSlice
  },
  devTools: true,
})