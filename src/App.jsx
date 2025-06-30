import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Contact from "./components/pages/Contact";
import ClientEnquiry from "./components/pages/ClientEnquiry";

function App() {
  return (
    <Router>
      <Header />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-enquiry" element={<ClientEnquiry />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
