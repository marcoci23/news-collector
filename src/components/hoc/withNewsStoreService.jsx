import React from "react";
import { NewsServiceConsumer } from "../NewsContext/NewsContext";

const withNewsStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <NewsServiceConsumer>
        {(newsService) => {
          return <Wrapped {...props} newsService={newsService} />;
        }}
      </NewsServiceConsumer>
    );
  };
};

export { withNewsStoreService };
