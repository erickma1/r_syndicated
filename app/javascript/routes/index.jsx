import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Headlinestory from "../components/Headlinestory";
import Subhead from "../components/Subhead";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/max_id/:id" element={<Headlinestory />} />
      <Route path="/articles" element={<Subhead />} />
    </Routes>
  </Router>
);