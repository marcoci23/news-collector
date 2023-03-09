import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";

import App from "./components/App/App";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";
import NewsService from "./services/NewsService";
import { NewsServiceProvider } from "./components/NewsContext/NewsContext";

import store from "./store";

const newsService = new NewsService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <NewsServiceProvider value={newsService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NewsServiceProvider>
    </ErrorBoundry>
  </Provider>
);
