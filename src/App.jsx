import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutPage,
  BlogPage,
  ContactPage,
  HomePage,
  PortfolioPage,
} from "./page";
import NavComponent from "./components/NavComponent";

const App = () => {
  return (
    <div className="bg-dark h-screen">
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
