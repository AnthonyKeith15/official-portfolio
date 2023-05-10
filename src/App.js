import './App.css';
import 'animate.css'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavButton from './NavButton.js';
import { useState } from 'react';

function App() {
  // Define an array of button colors that correspond to each page
  const buttonColors = ['#015284', '#2F72B6', '#143C70', '#0091EA'];
  

  // Define the state variables for the active page and background color
  const [activePage, setActivePage] = useState('Home');
  const [backgroundColor, setBackgroundColor] = useState(buttonColors[0]);

  // Define the function that handles a page button click
  const handlePageClick = (pageName, buttonColor) => {
    setActivePage(pageName);
    setBackgroundColor(buttonColor);
  };


  // Define an object that maps page names to their corresponding components
  const pages = {
    Home: <Home />,
    About: <About />,
    Projects: <Projects />,
    Contact: <Contact />,
  };

  // Map over the array of page names and create a NavButton for each page
  const buttons = Object.keys(pages).map((pageName, index) => (
    <NavButton
      key={pageName}
      pageName={pageName}
      buttonColor={buttonColors[index]}
      activePage={activePage}
      handlePageClick={handlePageClick}
    />
  ));

  // Set the background color to match the nav bar color.
  const style = {
    backgroundColor: backgroundColor
  };

  // Render the navigation buttons and the appropriate page content based on the activePage state
  const Content = pages[activePage];
  return (
    <main style={style}>
      {buttons}
      {Content}
    </main>
  );
}

export default App;
