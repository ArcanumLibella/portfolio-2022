import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Menu } from './components/organisms/Menu';
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
          {/* <HomePage /> */}
          <Routes>
            {/* <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/about-me">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route> */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
