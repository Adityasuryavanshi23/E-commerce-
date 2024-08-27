import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  productCount: 0,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
        console.log(action.payload)
      state.products = action.payload
      state.productCount = action.payload.length
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts  } = productSlice.actions

export default productSlice.reducer