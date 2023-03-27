import './App.css';
// import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Socials } from './Socials';

function App() {
  return (
    <>
      <div className="grounded-radiants">
        <nav>
          <Socials />
        </nav>
        <ul className='page-selector'>
          <li>
            Home
          </li>
          <li>
            Projects
          </li>
        </ul>

        <main>
          <Projects />
        </main>
      </div>


    </>
  );
}

export default App;
