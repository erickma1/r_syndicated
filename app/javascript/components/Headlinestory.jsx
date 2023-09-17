import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Headlinestory = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ main_text: "" });

  useEffect(() => {
    const url = "/api/v1/max_id/";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setArticle(response))
      .catch(() => navigate("/articles"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const articlemain_text = addHtmlEntities(article.main_text);

  return (
    <div className="">
      <Card className="border-0">
        {/* <Card.Header>News</Card.Header> */}
        <Card.Body>
        <Link
        className="link-dark offset-2 link-offset-3-hover link-underline 
         link-underline-opacity-0 link-underline-opacity-75-hover"
        to={`/article/${article.id}`}
      >
        <h5 className="mb-2">{article.headline}</h5>
      </Link>

      <div className="float-left">
        <img
          src={article.image}
          alt={`${article.headline} image`}
          className="m-2 rounded float-start"
        />
        <div className="text-start">
          <div
            dangerouslySetInnerHTML={{
              __html: `${articlemain_text}`,
            }}
          />
        </div>
      </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Headlinestory;
