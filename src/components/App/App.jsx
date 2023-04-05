import React from "react";
import WeatherPage from "../../pages/WeatherPage";
import NewsPage from "../../pages/NewsPage";
import "./App.css";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} exact />
      <Route path="/weather" element={<WeatherPage />} exact />
    </Routes>
  );
};

export default App;
