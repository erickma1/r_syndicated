import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Headlinetabs from './Headlinetabs';
import '../../assets/stylesheets/application.css';

const Headlinestory = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ main_text: '' });

  useEffect(() => {
    const url = '/api/v1/max_id/';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => setArticle(response))
      .catch(() => navigate('/articles'));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  };

  const articlemain_text = addHtmlEntities(article.main_text);

  return (
    <div className="headline-news-image">
      <Card>
        <Card.Img
          variant="top"
          src={article.image}
          alt="Your Image"
          className=""
        />

        <a className="" href={`/article/${article.id}`}>
          <Card.ImgOverlay>
            <div className="overlay-style">
              <Card.Title>
                <div className="image-text-style headline-text-font">{article.headline}</div>
              </Card.Title>
            </div>
          </Card.ImgOverlay>

          <Card.Body></Card.Body>
        </a>
      </Card>
     
    </div>
  );
};

export default Headlinestory;
