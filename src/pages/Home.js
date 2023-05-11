import HomeImage from '../home_image.png';
import './Home.css'

function Home() {
  return (
    <div className='animate__animated animate__rotateInUpRight home-content' id="content">
      <div className='home-text'>
      <h1>Welcome to my portfolio!</h1>
      <p>My name is Anthony Keith, a Front End Developer and UX designer with a focus on creating engaging user interfaces that increase brand awareness. My approach utilizes techniques such as animation, microinteractions, and AI to craft memorable user experiences that establish a lasting connection between the brand and its audience.</p>
      </div>
      <img src={HomeImage} alt="AI generated art of man coding" className="home-image" title='Midjourney generated image of me coding'/>
    </div>
  );
}

export default Home;