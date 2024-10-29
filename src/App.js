import logo from './logo.svg';
import svg from "./Img/ar-vr-mr-training.png";
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import PublicationDetail from './pages/PublicationDetail';
import ResearchDetail from './pages/ResearchDetail';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import '../src/styles/animate.css';
import '../src/styles/bootstrap.min.css';
import '../src/styles/style.css';
import TeachingPage from './pages/TeachingPage';
import DynamicPage from './DynamicPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<TeamPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path ="/research/:id" element={<ResearchDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/publications/:id" element={<PublicationDetail />} />
          <Route path ="/teaching" element={<TeachingPage />} />
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
