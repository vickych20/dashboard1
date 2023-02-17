import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import "./app.css";
import "./index.css";
import Home from "./Home";
import About from "./components/About";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Llast from "./components/Llast";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="max-w-[1200px] m-auto overflow-x-hidden">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/last" element={<Llast />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
        <Subscribe />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
