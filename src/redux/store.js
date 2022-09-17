import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import productUnitReducer from './productUnit';

const store = configureStore({
  reducer: {
    user: userReducer,
    productUnit: productUnitReducer,
  },
});

export default store;
