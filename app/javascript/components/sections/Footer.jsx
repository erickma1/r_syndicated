import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../assets/stylesheets/application.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          A news website that aggregates news stories from a wide range of
          sources, spanning various political perspectives, regions, and
          ideologies typically aims to provide users with a more comprehensive
          and balanced view of current events.
        </p>
        <div className="icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Street name and number</span> City, Country
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#"> office@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {' '}
          Company<span> logo</span>
        </h2>
        <p className="menu">
          <a href="#"> Home</a> |<a href="#"> About</a> |
          <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
          <a href="#"> News</a> |<a href="#"> Contact</a>
        </p>
        <p className="name"> Company Name &copy; 2016</p>
      </div>
    </footer>
    // Footer
  );
};

export default Footer;
