import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../../assets/stylesheets/application.css';

const News = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = '/api/v1/articles/mostread';
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
    <div key={article.id}>
      <a
        href={`/article/${article.id}`}
        className="link"
      >
        {article.headline}
      </a>
      <hr className="custom-line" />
    </div>
  ));

  const noArticles = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      Loading...
    </div>
  );
  return (
    <>
      <div>
        {articles.length > 0 ? <>{allArticles}</> : noArticles}{' '}
      </div>{' '}
    </>
  );
};

export default News;
