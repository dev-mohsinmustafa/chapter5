import { configureStore } from '@reduxjs/toolkit';




import todoReducer from "../redux/slices/todoSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

import newsReducer from "../redux/slices/newsSlice";


export const store = configureStore({
  reducer: {
    // todo: todoReducer,

    new : newsReducer,


    // product : productsReducer,

    // cart : cartReducer,

  },
});
