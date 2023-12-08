import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
    <div key={article.id} className="row">
    <Link
      to={`/article/${article.id}`}
      className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
    >
      <div className="col-md-3">
        <img
          src={article.image}
          style={{ width: '100%', height: 'auto' }}
          className="img-fluid"
          alt={article.headline}
        />
      </div>
  
      <div className="col-md-9">
        <div style={{ }}>{article.headline}</div>
      </div>
    </Link>
    <hr />
  </div>
  
  ));

  const noArticles = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No articles yet. Why not <Link to="/new_article">create one</Link>?
      </h4>
    </div>
  );

  return (
    <>
      <br />
      <Card
        style={{
          backgroundColor: '#ffffff',
          backgroundSize: 'cover',
          color: 'black',
          borderRadius: 0,
          border: 0,
        }}
      >
        <Card.Body>
          {articles.length > 0 ? (
            <div>{allArticles}</div>
          ) : (
            noArticles
          )}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default Headlinenews;
