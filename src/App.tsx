import { NavBar } from './components/molecules/NavBar';
import { MenuTemplate } from './components/templates/MenuTemplate/MenuTemplate';

function App() {
  return (
    <div className="App">
      <main className="relative bg-purple-dark h-full">
        <NavBar />
        <MenuTemplate />
      </main>
    </div>
  );
}

export default App;
