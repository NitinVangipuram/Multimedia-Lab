import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Team from './components/Team';
import '../src/styles/animate.css';
import '../src/styles/bootstrap.min.css';
import '../src/styles/style.css';
import Footer from './components/Footer';
import News from './components/News';
import Main from './pages/Main';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import NewsPage from './pages/NewsPage';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path ="/research" element = {<ResearchPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
