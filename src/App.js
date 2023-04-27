import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  }

  let content;

  switch (activePage) {
    case 'Home':
      content = <Home />;
      break;
    case 'About':
      content = <About />;
      break;
    case 'Projects':
      content = <Projects />;
      break;
    case 'Contact':
      content = <Contact />;
      break;
    default:
      content = <Home />;
      break;
  }
  
  const buttons = ['Home', 'About', 'Projects', 'Contact'].map((pageName, index) => {
    return (
      <button
        key={pageName}
        id={`button-${index}`}
        className={activePage === pageName ? 'active' : ''}
        onClick={() => handlePageClick(pageName)}
      >
        {pageName}
      </button>
    );
  });
  
  
  
  
  return (
    <main>
    {buttons}
    {content}
    </main>
  );
}

export default App;
