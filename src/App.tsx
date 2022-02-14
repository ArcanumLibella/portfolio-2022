import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Menu } from './components/organisms/Menu';
import { HeroTemplate } from './components/templates/HeroTemplate';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <main className="relative bg-purple-dark h-full">
          <Menu onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
          <HeroTemplate />
        </main>
      </div>

      <Routes>
        <Route path="/projects" element={ProjectsPage} />
        <Route path="/about-me" element={AboutPage} />
        <Route path="/contact" element={ContactPage} />
        <Route path="/" element={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;
