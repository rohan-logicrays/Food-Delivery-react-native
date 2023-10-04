// redux/reducers.js

import {combineReducers} from 'redux';
import cartReducer from './cartSlice';
import favouriteSlice from './favouriteSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  favourite: favouriteSlice,
});

export default rootReducer;
