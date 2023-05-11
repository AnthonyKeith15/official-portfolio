import './About.css'

function About({ animationDirection }) {
  return (
    <div className={`animate__animated animate__rotateInUp${animationDirection} about-me`}>
      <header>
      <h5>More About me:</h5>
      </header>
      <span>
        <h3>As a developer:</h3>
        <p>I'm the kind of person who dives head first into new situations, whether it's taking on a new framework, exploring a new city, or trying out a new hobby. I enjoy bold eye-catching colors to create interfaces that stand out and capture the attention of anyone who sees it. When I'm not coding, I indulge in my love for cooking and experimenting with cooking and experimenting with new culinary creations. Prior to my career in tech, I served in the Air Force, where I developed valuable skills such as attention to detail, discipline, and teamwork.</p>
      </span>
      <aside>
        <h3>On a personal level:</h3>
        <p>Here are some of the tools and technologies I'm familiar with:</p>
      </aside>
      <div className='tools'>
      <h3>Tools I Know:</h3>
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
