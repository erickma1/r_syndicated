import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Articles from "../components/Articles";
// import Article from "../components/Article";
import Headlinestory from "../components/Headlinestory";
import Subhead from "../components/Subhead";
import Articlepage from "../components/Articlepage";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<Articlepage />} />
      <Route path="/max_id/:id" element={<Headlinestory />} />
      <Route path="/articles" element={<Subhead />} />
    </Routes>
  </Router>
);