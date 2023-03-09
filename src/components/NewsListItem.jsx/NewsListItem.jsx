import React, { Fragment } from "react";

const NewsListItem = ({ news }) => {
  const { title, description, image } = news;

  return (
    <Fragment>
      <div>{title}</div>
      <div>{description}</div>
      <img width="500px" src={image} />
    </Fragment>
  );
};

export default NewsListItem;
