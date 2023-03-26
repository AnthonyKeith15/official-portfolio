import './App.css';
// import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
// import { Projects } from './pages/Projects';
import { Socials } from './Socials';

function App() {
  return (
    <>
      <div className="grounded-radiants">
        <nav>
          
        <Socials/ >
        </nav>
        <Home />
      {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        </ul>
    </nav> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}
      </div>


    </>
  );
}

export default App;
