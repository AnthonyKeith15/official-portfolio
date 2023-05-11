import './About.css'
import { useState } from 'react';

function About({ animationDirection }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCooking, setIsHoveredCooking] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnterCooking = () => {
    setIsHoveredCooking(true);
  };

  const handleMouseLeaveCooking = () => {
    setIsHoveredCooking(false);
  };

  return (
    <div className={`animate__animated animate__rotateInUp${animationDirection} about-me`}>
      {isHoveredCooking && (
        <div id="cooking">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div id='area'>
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      )}
      {isHovered && (
        <div class="notes">
          <div className='note'id="noot-1">
            &#9835; &#9833;
          </div>
          <div className='note'id="noot-2">
            &#9833;
          </div>
          <div className='note'id="noot-3">
            &#9839; &#9834;
          </div>
          <div className='note'id="noot-4">
            &#9834;
          </div>
        </div>
      )}
      <header>
        <h5>More About Me:</h5>
      </header>
      <span id='left-text'>
        <h3>On A Professional Level:</h3>
        <p> I have two years of experience in React creating UIs that encourage engagement from the user. My approach utilizes techniques such as microinteractions, animations, and AI to create memorable experiences that establish a lasting connection between the brand and its audience. The underutilized advertising method of crafting a user experience that people will want to share holds immense potential. Over 1 billion 5G connections are anticipated worldwide by 2025, I excel in helping brands leverage this approach to reach a vast audience and reduce customer aquisition costs.</p>
      </span>
      <aside>
        <h3>On A Personal Level:</h3>
        <p>I love traveling to other countries and immersing myself in their culture. It's a unparrelled experience that leaves an indelible mark, connecting me to the beauty of our shared humanity. I'm also an avid cook who enjoys trying new recipes and recreating dishes I see on <span className="big-text" id="cooking-text" onMouseEnter={handleMouseEnterCooking} onMouseLeave={handleMouseLeaveCooking}>cooking shows.</span> When I'm not busy in the kitchen, I'm always looking for <span className="big-text" id="music-text" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> new music</span> across wide variety of genres that speak to my soul. As a diamond-ranked Ana main in Overwatch 2, I use my individual skills to help empower my teammates and lead everyone to victory!</p>
      </aside>
      <div className='tools'>
        <h3>Tools And Tech I Know:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git</li>
          <li>Photoshop</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
