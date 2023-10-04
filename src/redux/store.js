import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import persistReducer from 'redux-persist/es/persistReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
