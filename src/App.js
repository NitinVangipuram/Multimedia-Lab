import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './pages/Main';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import PublicationDetail from './pages/PublicationDetail';
import ResearchDetail from './pages/ResearchDetail';
import NewsPage from './pages/NewsPage';
import '../src/styles/animate.css';
import '../src/styles/bootstrap.min.css';
import '../src/styles/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path ="/research/:id" element={<ResearchDetail />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/publications/:id" element={<PublicationDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
