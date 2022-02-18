import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { basePath, contextPath, previewPath } from "../constants/Common";
import Home from "../Pages/Home";

function HomeRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<h1>Root</h1>} />
        <Route path={basePath} element={<Home />} />
        <Route path={contextPath} element={<Home />} />
        <Route path={previewPath} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default HomeRoutes;
