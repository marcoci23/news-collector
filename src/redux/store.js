import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categoriesSlice";
import newsReducer from "./slices/newsSlice";
import languageReducer from "./slices/languageSlice";
export const store = configureStore({
  reducer: {
    categoryReducer,
    newsReducer,
    languageReducer,
  },
});
