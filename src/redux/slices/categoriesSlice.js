import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: "general",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
