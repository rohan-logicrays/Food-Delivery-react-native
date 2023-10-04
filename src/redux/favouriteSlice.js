import {createSlice} from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.push({...action.payload});
      }
    },
    removeFav: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {addFav, removeFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;
