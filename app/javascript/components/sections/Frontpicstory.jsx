import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Frontpicstory = () => {
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
      <div className="col-md-3">
        <Link
          to={`/article/${article.id}`}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <img
            src={article.image}
            style={{ width: '100%', margin: '0px, 0px, 3px, 0px', height: 'auto' }}
            className="img-fluid"
            alt={article.headline}
          />
        </Link>
      </div>

      <div className="col-md-9">
        <Link
          to={`/article/${article.id}`}
          style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2', textOverflow: 'ellipsis', overflow: 'hidden'}}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <div style={{}}>{article.headline}</div>
        </Link>
      </div>

      <hr />
    </div>
  ));

  const noArticles = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      Loading...
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
          border: 0,
        }}
      >
        
        <Card.Body>
          {articles.length > 0 ? <div>{allArticles}</div> : noArticles}
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default Frontpicstory;
