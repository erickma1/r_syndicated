import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../../assets/stylesheets/application.css';

const World = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = '/api/v1/articles/world';
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
    <div className="" key={article.id}>
      <div className="section-headline-world">WORLD NEWS</div>

      <Link
        to={`/article/${article.id}`}
        className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        <img
          src={article.image}
          style={{
            width: '100%',
            height: 'auto',
            margin: '0, 0, 10px, 0',
            marginBottom: '15px',
          }}
          className="img-fluid"
          alt={article.headline}
        />
      </Link>

      <Link
        to={`/article/${article.id}`}
        className="link-section-headline line-clamp-3"
      >
        <div style={{}}>{article.headline}</div>
      </Link>
      <br />
    </div>
  ));

  const noArticles = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>Loading...</h4>
    </div>
  );

  return <>{articles.length > 0 ? <div>{allArticles}</div> : noArticles}</>;
};

export default World;
