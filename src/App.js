import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useState } from 'react';


function App() {
  const [activePage, setActivePage] = useState('Home');
  const [backgroundColor, setBackgroundColor] = useState('#f87a48');

  const handlePageClick = (pageName, buttonColor) => {
    setActivePage(pageName);
    setBackgroundColor(buttonColor);
  }

  const buttonColors = ['#f87a48', '#C70039', '#900C3F', '#581845'];

  const buttons = ['Home', 'About', 'Projects', 'Contact'].map((pageName, index) => {
    return (
      <button
        key={pageName}
        id={`button-${index}`}
        style={{ backgroundColor: buttonColors[index] }}
        className={activePage === pageName ? 'active' : ''}
        onClick={() => {
          handlePageClick(pageName, buttonColors[index]);
        }}
      >
        <h5>{pageName}</h5>
      </button>
    );
  });

  const style = {
    backgroundColor: backgroundColor
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

  return (
    <main style={style}>
      {buttons}
      {content}
    </main>
  );
}

export default App;
