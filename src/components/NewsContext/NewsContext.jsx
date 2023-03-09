import React from "react";

const { Provider: NewsServiceProvider, Consumer: NewsServiceConsumer } =
  React.createContext();

export { NewsServiceConsumer, NewsServiceProvider };
