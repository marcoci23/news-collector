const newsLoaded = (news) => {
  return {
    type: "NEWS_LOADED",
    payload: news,
  };
};

export { newsLoaded };
