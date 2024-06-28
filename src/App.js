// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Header/header';
import Footer from './Components/Layout/Footer/footer';
import Blogs from './View/Blogs/blogPage';
import News from './View/News/news';
import Home from './View/Home/home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={< Home/>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
