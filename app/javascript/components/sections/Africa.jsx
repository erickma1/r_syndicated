import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Africa = () => {
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
      
        <Link
          to={`/article/${article.id}`}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <img
            src={article.image}
            style={{ width: '100%', height: 'auto', margin: '0px, 0px, 10px, 0px', marginBottom: '15px' }}
            className="img-fluid"
            alt={article.headline}
          />
        </Link>
     

     
        <Link
          to={`/article/${article.id}`}
          style={{ fontSize: '17px', fontWeight: '700', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2', textOverflow: 'ellipsis', overflow: 'hidden'}}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <div style={{}}>{article.headline}</div>
        </Link>
        <Link
          to={`/article/${article.id}`}
          style={{ fontSize: '15px', fontWeight: '400', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '3', textOverflow: 'ellipsis', overflow: 'hidden'}}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <div style={{}}>{article.main_text}</div>
        </Link>
      </div>

   
  ));

  const noArticles = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        Loading...
      </h4>
    </div>
  );

  return (
    <>
      {articles.length > 0 ? <div>{allArticles}</div> : noArticles}
    </>
  );
};

export default Africa;