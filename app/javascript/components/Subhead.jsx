import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Sidebar";
import News from "./sections/News";

  function Subhead() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6"><News /></div>
        <div className="col-12 col-sm-6"><News /></div>
    
        <div className="w-100"></div>
    
        <div className="col-12 col-sm-6"><News /></div>
        <div className="col-12 col-sm-6"><News /></div>
        <div className="w-100"></div>

        <div className="col-12 col-sm-6"><News /></div>
        <div className="col-12 col-sm-6"><News /></div>
      </div>
    </div>
    );
  }
  
  export default Subhead