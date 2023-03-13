import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const News = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://newsdata2.p.rapidapi.com/news",
      params: { language: "en", q: "cryptocurrency" },
      headers: {
        "X-RapidAPI-Key": "13cbddd8c3msh83442b2d4cc3526p1cd34djsn9fe518361bc5",
        "X-RapidAPI-Host": "newsdata2.p.rapidapi.com",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setNews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
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
        <>
          <div className="container row mt-5 pt-5">
            {news.map((article) => {
              return (
                <div className="card col-lg-3">
                  <img
                    src={article.image_url}
                    className="card-img-top"
                    alt="img"
                  ></img>
                  <div className="card-body" style={{ width: "20rem" }}>
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.link} className="btn btn-primary">
                      Read
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn btn-outline-dark">next</button>
        </>
      )}
    </>
  );
};

export default News;
