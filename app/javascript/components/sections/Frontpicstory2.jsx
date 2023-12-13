// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';

// const Frontpicstory = () => {
//   const navigate = useNavigate();
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const url = '/api/v1/articles/news';
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error('Network response was not ok.');
//       })
//       .then((res) => setArticles(res))
//       .catch(() => navigate('/'));
//   }, [navigate]);
  

//   const allArticles = articles.map((article) => (
//     <div className="row" key={article.id}>
//       <div className="col-md-3">
//         <Link
//           to={`/article/${article.id}`}
//           className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
//         >
//           <img
//             src={article.image}
//             style={{ width: '100%', margin: '0px, 0px, 3px, 0px', height: 'auto' }}
//             className="img-fluid"
//             alt={article.headline}
//           />
//         </Link>
//       </div>

//       <div className="col-md-9">
//         <Link
//           to={`/article/${article.id}`}
//           style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2', textOverflow: 'ellipsis', overflow: 'hidden'}}
//           className="text-start link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
//         >
//           <div style={{}}>{article.headline}</div>
//         </Link>
//       </div>

//       <hr />
//     </div>
//   ));

//   const noArticles = (
//     <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
//       Loading...
//     </div>
//   );

//   return (
//     <>
//       <br />
//       <Card
//         style={{
//           backgroundColor: '#ffffff',
//           backgroundSize: 'cover',
//           color: 'black',
//           border: 0,
//         }}
//       >
        
//         <Card.Body>
//           {articles.length > 0 ? <div>{allArticles}</div> : noArticles}
//         </Card.Body>
//       </Card>
//       <br />
//     </>
//   );
// };

// export default Frontpicstory;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Headlinetabs from './Headlinetabs';

const Frontpicstory2 = () => {
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
    fontSize: '17px', // Adjust the font size as needed
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
     
          {/* <Link
            className="link-dark offset-2 link-offset-3-hover link-underline 
         link-underline-opacity-0 link-underline-opacity-75-hover"
            to={`/article/${article.id}`}
          > */}
        <Card.Img variant="top" src={article.image} alt="Your Image" style={{ width: '100%',  display: 'block', height: '150px' }} />
        {/* </Link> */}
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
       
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        </Link>
      </Card>
    
    </div>
    
  );
};

export default Frontpicstory2;
