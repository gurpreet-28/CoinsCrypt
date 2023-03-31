import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  const { title, source_id, creator, image_url, description, link, pubDate } =
    props.article;

  return (
    <div className="my-3">
      <div className="card news-card">
        <img
          src={
            image_url
              ? image_url
              : "https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          }
          alt="news_img"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="badge text-bg-info">{source_id}</span>
          <p
            className="card-text"
            style={{ height: "50px", maxHeight: "80px", overflow: "hidden" }}
          >
            {description}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {!creator ? "Unknown" : creator} on{" "}
              {new Date(pubDate).toLocaleString()}
            </small>
          </p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
