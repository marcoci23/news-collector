import React from "react";
import NewsListItem from "../NewsListItem.jsx/NewsListItem";
import { connect } from "react-redux";
import { withNewsStoreService } from "../hoc/withNewsStoreService";
import { newsLoaded } from "../../actions";
class NewsList extends React.Component {
  componentDidMount() {
    const { newsService, newsLoaded } = this.props;

    newsService.getNews().then((data) => newsLoaded(data));
  }

  render() {
    const { news } = this.props;
    return (
      <div>
        {news.map((item, id) => {
          return <NewsListItem key={id} news={item} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newsLoaded: (news) => {
      dispatch(newsLoaded(news));
    },
  };
};

export default withNewsStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(NewsList)
);
