import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../../assets/stylesheets/application.css';

const Headlinenews = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = '/api/v1/articles/news';
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((res) => setArticles(res))
      .catch(() => navigate('/'));
  }, [navigate]);

  const allArticles = articles.map((article) => (
    <div className="row" key={article.id}>
      <div className="col-md-5">
        <a
          href={`/article/${article.id}`}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <img
            src={article.image}
            className="headline-news-image img-fluid"
            alt={article.headline}
          />
        </a>
      </div>

      <div className="col-md-7">
        <a
          href={`/article/${article.id}`}
          className="link-headline-header line-clamp-2"
        >
          <div>{article.headline}</div>
        </a>
        <a
          href={`/article/${article.id}`}
          className="link-headline-news line-clamp-3"
        >
          <div>{article.main_text}</div>
        </a>
      </div>
    </div>
  ));

  const noArticles = (
    <div className="centered-container">
      <h4>Loading...</h4>
    </div>
  );

  return (
    <>
      <br />
      {articles.length > 0 ? <div>{allArticles}</div> : noArticles}
      <br />
    </>
  );
};

export default Headlinenews;
