import { useState } from 'react';

import { Menu } from './components/organisms/Menu';
import { HeroTemplate } from './components/templates/HeroTemplate';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <main className="relative bg-purple-dark h-full">
        <Menu onToggleMenu={onToggleMenu} /* isMenuOpen={isMenuOpen} */ />
        <HeroTemplate />
      </main>
    </div>
  );
}

export default App;
