import React from "react";
import HomePage from "../pages/HomePage";
import WeatherPage from "../pages/WeatherPage";
import NewsPage from "../pages/NewsPage";

import { Route, Routes, Switch } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/news" element={<NewsPage />} exact />
      <Route path="/weather" element={<WeatherPage />} exact />
    </Routes>
  );
};

export default App;
