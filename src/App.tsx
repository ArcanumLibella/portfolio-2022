import { useState } from 'react';

import { MenuNav } from './components/organisms/MenuNav/MenuNav';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <main className="relative bg-purple-dark h-full">
        <MenuNav onToggleMenu={onToggleMenu} />
        {/* <HeroTemplate /> */}
      </main>
    </div>
  );
}

export default App;
