import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async (params) => {
  const { currentPage, category, lang } = params;

  const res = await axios.get(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&max=5&page=${currentPage}&expand=content&apikey=87cf4570610511f989f344bbabc8cc1f`
  );
  return res.data;
});

const initialState = {
  news: [],
  status: "loading", // loading , success , error
  totalArticles: null,
  currentPage: 1,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        // state.news = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload.articles;
        state.totalArticles = action.payload.totalArticles;
        state.status = "success";
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "error";
        // state.news = [];
      });
  },
  // extraReducers: {

  //   // [fetchNews.pending]: (state) => {
  //   //   state.status = "loading";
  //   //   state.news = [];
  //   // },
  //   // [fetchNews.fulfilled]: (state, action) => {
  //   //   state.status = "success";
  //   //   state.news = action.payload;
  //   // },
  //   // [fetchNews.rejected]: (state, action) => {
  //   //   state.status = "error";
  //   // },
  // },
});

export const { setStatus, setCurrentPage } = newsSlice.actions;
export default newsSlice.reducer;
