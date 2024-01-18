import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Article = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ main_text: "", headline: "", image: "" });

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
    let main_textListContent = "Story loading...";

    if (article.main_text.length > 0) {
      main_textListContent = (
        <>
       
          <div className="link-section-headline line-clamp-3">
            {article.headline}
          </div>
          <img
          src={article.image}
          style={{
            width: '100%',
            height: '170px',
            margin: '0, 0, 10px, 0',
            marginBottom: '15px',
          }}
          className="img-fluid"
          alt={article.headline}
        />
          {article.main_text}
        </>
      );
    }

    return main_textListContent;
  };

  const articlemain_text = addHtmlEntities(article.main_text);

  return <div className="">{main_textList()}</div>;
};

export default Article;
