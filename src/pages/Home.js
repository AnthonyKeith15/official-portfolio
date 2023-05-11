import HomeImage from '../home_image.png';
import './Home.css'

function Home() {
  return (
    <div className='animate__animated animate__rotateInUpRight home-content' id="content">
      <div className='home-text'>
      <h1>Hey, I'm Anthony Keith!</h1>
      <p>Welcome to my portfolio, I'm a Front End Developer and UX designer that helps businesses increases brand awareness. </p>
      </div>
      <img src={HomeImage} alt="AI generated art of man coding" className="home-image" title='Midjourney generated image of me coding'/>
    </div>
  );
}

export default Home;