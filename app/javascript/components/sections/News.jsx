import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

const News = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = "/api/v1/articles/mostread";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setArticles(res))
      .catch(() => navigate("/"));
  }, [navigate]);

  const allArticles = articles.map((article) => (
    <div className="row" key={article.id}>
      <div className="col-md-7">
      <Link
      style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2', textOverflow: 'ellipsis', overflow: 'hidden'}}
        to={`/article/${article.id}`}
        className="text-start link-dark link-offset-3-hover link-underline 
         link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        {article.headline}
      </Link>

        </div>

        <div className="col-md-5">
        <Link
          to={`/article/${article.id}`}
          className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          <img
            src={article.image}
            style={{ width: '100%', height: 'auto', margin: '0px, 0px, 3px, 0px' }}
            className="img-fluid"
            alt={article.headline}
          />
        </Link>


        </div>
        <hr />
      </div>

  ));

  const noArticles = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">Loading...</div>
  );

  return (
     
      <Card style={{ fontSize: '15px', fontWeight: '500', backgroundColor: '#ffffff', backgroundSize: 'cover', color: 'black', borderRadius: 0, border: 0 }}>
        <Card.Header>Trending</Card.Header>
        <Card.Body>
          {/* <Card.Title>Secondary Element</Card.Title> */}
          {articles.length > 0 ? (
            <div>{allArticles}</div>
          ) : (
            noArticles
          )}
        </Card.Body>
        {/* <div className="card-footer bg-transparent border-success">More News...</div> */}
      </Card>
    
    
  );
};

export default News;
