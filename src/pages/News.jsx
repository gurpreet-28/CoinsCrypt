import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import { GetNews } from "../config/api";
// import Spinner from "../components/Spinner";

const News = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [news, setNews] = useState([]);
  const [page, setPage] = useState("");
  // const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchNews = async () => {
    // setLoading(true);
    if (count === 0) {
      const { data } = await axios.get(GetNews(apiKey));
      setNews(data.results);
      setPage(data.nextPage);
      setCount(1);
    } else {
      const { data } = await axios.get(GetNews(apiKey, page));
      setNews(data.results);
      setPage(data.nextPage);
    }
    // setLoading(false);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  });

  return (
    <div className="container pt-5">
      <div className="mt-5 news-head">
        <h2>Latest news about cryptocurrency.</h2>
      </div>
      <div className="row">
        {news.map((article) => {
          return (
            <div className="col-md-4" key={article.url}>
              <NewsItem article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
