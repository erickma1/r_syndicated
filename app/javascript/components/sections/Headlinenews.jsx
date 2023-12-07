import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";


const Headlinenews = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = "/api/v1/articles/news";
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
    <div key={article.id} className="">
      <Link
        to={`/article/${article.id}`}
        className="text-start link-dark link-offset-3-hover link-underline 
         link-underline-opacity-0 link-underline-opacity-75-hover"
      >
         <img
          src={'app/javascript/img/news_image.jpg'}
        //   alt={`${article.headline} image`}
          className="m-2 rounded float-start"
        />
        {article.headline}
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
      <Card style={{ backgroundColor: '#ffffff', backgroundSize: 'cover', color: 'black', borderRadius: 0, border: 0 }}>
        {/* <Card.Header>News</Card.Header> */}
        <Card.Body>
          {/* <Card.Title>Secondary Element</Card.Title> */}
          {articles.length > 0 ? (
            <div className="row">{allArticles}</div>
          ) : (
            noArticles
          )}
        </Card.Body>
        {/* <div className="card-footer bg-transparent border-success">More News...</div> */}
      </Card>
      <br />
    </>
  );
};

export default Headlinenews;
