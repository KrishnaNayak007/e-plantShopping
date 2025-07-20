// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create the Redux store using Redux Toolkit
const store = configureStore({
  reducer: {
    // 'cart' is the name of the state slice managed by cartReducer
    cart: cartReducer,
  },
});

export default store; // Export to use in <Provider store={store}>
