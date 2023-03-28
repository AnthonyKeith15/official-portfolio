import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import Projects from './pages/Projects';
import { PageSelector } from './PageSelector';
import { Socials } from './Socials';

function App() {
  return (
    <>
      <div className="grounded-radiants">
        <Socials />
        <PageSelector />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>


    </>
  );
}

export default App;
