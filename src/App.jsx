// App.jsx - Main application with routing
// Handles navigation between main portfolio page and individual project pages

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            {/* Main portfolio page with all sections */}
            <Route path="/" element={<Home />} />
            
            {/* Individual project detail page */}
            {/* URL format: /project/1, /project/2, etc. */}
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
