import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Articles = () => {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = "/api/v1/articles/index";
        fetch(url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then((res) => setArticles(res))
          .catch(() => navigate("/"));
      }, []);

      const allArticles = articles.map((articles, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <div className="card mb-4">
            <img
              src={articles.headline}
              className="card-img-top"
              alt={`${articles.headline} image`}
            />
            <div className="card-body">
              <h5 className="card-title">{articles.headline}</h5>
              <Link to={`/article/${articles.id}`} className="btn custom-button">
                View Articles
              </Link>
            </div>
          </div>
        </div>
      ));
      const noArticles = (
        <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
          <h4>
            No article yet. Why not <Link to="/new_article">create one</Link>
          </h4>
        </div>
      );
    
      return (
        <>
          <section className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
              <h1 className="display-4">Articles for every occasion</h1>
              <p className="lead text-muted">
                We’ve pulled together our most popular article, our latest
                additions, and our editor’s picks, so there’s sure to be something
                tempting for you to try.
              </p>
            </div>
          </section>
          <div className="py-5">
            <main className="container">
              <div className="text-end mb-3">
                <Link to="/article" className="btn custom-button">
                  Create New Article
                </Link>
              </div>
              <div className="row">
                {articles.length > 0 ? allArticles : noArticles}
              </div>
              <Link to="/" className="btn btn-link">
                Home
              </Link>
            </main>
          </div>
        </>
      );

  };
  
  export default Articles;