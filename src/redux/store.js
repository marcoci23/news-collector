import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoriesSlice";
import searchReducer from "./searchSlice";
export const store = configureStore({
  reducer: {
    categoryReducer,
    searchReducer,
  },
});
