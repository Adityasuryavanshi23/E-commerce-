import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
}

export const cartSlice = createSlice({

  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
        console.log(action.payload)
        const data = [...state.cart , action.payload]
      state.cart = data
      localStorage.setItem("cart" , JSON.stringify(data) )
    },
    updateCart:(state, action) => {
        console.log(action.payload)
      state.cart =  action.payload
      localStorage.setItem("cart" , JSON.stringify(action.payload) )
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCart , updateCart  } = cartSlice.actions


export default cartSlice.reducer


