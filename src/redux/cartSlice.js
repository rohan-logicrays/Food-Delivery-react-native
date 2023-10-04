// redux/cartSlice.js

import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Check if the item already exists in the cart and update quantity
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      // Remove the item from the cart
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      // Update quantity of a specific item in the cart
      const itemToUpdate = state.find(item => item.id === action.payload.id);
      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
    resetCart: state => {
      return [];
    },
  },
});

export const {addItem, removeItem, updateQuantity, resetCart} =
  cartSlice.actions;
export default cartSlice.reducer;
