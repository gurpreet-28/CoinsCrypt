import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchNews = async () => {
    const options = {
      method: "GET",
      url: "https://newsdata2.p.rapidapi.com/news",
      params: { language: "en", q: "cryptocurrency" },
      headers: {
        "X-RapidAPI-Key": "27d95d49fcmshe45a3ec39ce438ap1e9abbjsn137363eadc59",
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
    document.title = "News - CoinsCrypt";
    fetchNews();
    // eslint-disable-next-line
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="mt-4 news-head">
            <h2>Latest news about cryptocurrency.</h2>
            <hr />
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
