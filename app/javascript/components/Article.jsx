import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ main_text: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
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

  const main_textList = () => {
    let main_textList = "No main_text available";

    if (article.main_text.length > 0) {
        main_textList = article.main_text
        .split(",")
        .map((main_text, index) => (
          <li key={index} className="list-group-item">
            {main_text}
          </li>
        ));
    }

    return main_textList;
  };

  const articlemain_text = addHtmlEntities(article.main_text);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <img
          src={article.image}
          alt={`${article.headline} image`}
          className="img-fluid position-absolute"
        />
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {article.headline}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group">
              <h5 className="mb-2">Articles</h5>
              {main_textList()}
            </ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h5 className="mb-2">Preparation Instructions</h5>
            <div
              dangerouslySetInnerHTML={{
                __html: `${articlemain_text}`,
              }}
            />
          </div>
          {/* <div className="col-sm-12 col-lg-2">
            <button
              type="button"
              className="btn btn-danger"
            >
              Delete Article
            </button>
          </div> */}
        </div>
        <Link to="/articles" className="btn btn-link">
          Back to articles
        </Link>
      </div>
    </div>
  );
};

export default Article;