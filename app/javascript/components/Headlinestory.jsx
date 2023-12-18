import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Headlinetabs from './Headlinetabs';

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

  const containerStyle = {
    position: 'relative',
    maxWidth: '100%', // Ensures the image is responsive
  };

  const textStyle = {
    position: 'absolute',
     // Adjust the vertical position as needed
    left: '10%', // Adjust the horizontal position as needed
    bottom: '1%',
    transform: 'translate(-10%, -10%)', // Center the text within the container
    color: 'white', // Text color
    fontSize: '24px', // Adjust the font size as needed
    fontFamily: 'Source Sans Pro, sans-serif !important',
    fontWeight: '700',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%', // Adjust the height to control the darkness
    background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0.8))',
    pointerEvents: 'none', // Allows interaction with elements beneath the overlay
  };

  return (
    <div className="">
      

      <Card>

        <Card.Img variant="top" src={article.image} alt="Your Image" style={{ width: '100%',  display: 'block', height: '300px' }} />
  
        <Link
            className="link-dark offset-2 link-offset-3-hover link-underline 
         link-underline-opacity-0 link-underline-opacity-75-hover"
            to={`/article/${article.id}`}
          >
        <Card.ImgOverlay>
        <div style={overlayStyle}>
        <Card.Title><div style={textStyle}>{article.headline}</div></Card.Title>
        </div>
        
        </Card.ImgOverlay>
        
        
        <Card.Body>

        </Card.Body>
        </Link>
      </Card>
    
    </div>
    
  );
};

export default Headlinestory;
