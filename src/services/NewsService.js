const apikey = "87cf4570610511f989f344bbabc8cc1f";
const url =
  "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=" +
  apikey;

export default class NewsService {
  getNews() {
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data.articles;
      });
  }
}
