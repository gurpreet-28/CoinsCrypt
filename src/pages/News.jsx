import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

const News = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchNews = async () => {
    const options = {
      method: "GET",
      url: "https://newsdata2.p.rapidapi.com/news",
      params: { language: "en", q: "cryptocurrency" },
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
      },
    };
    setLoading(true);
    if (count === 0) {
      const { data } = await axios.request(options);
      setNews(data.results);
      setCount(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container pt-5">
          <div className="mt-5 news-head">
            <h2>Latest news about cryptocurrency.</h2>
          </div>
          <div className="row">
            {news.map((article) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={article.link}>
                  <NewsItem article={article} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
