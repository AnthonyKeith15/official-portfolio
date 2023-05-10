function Projects({ animationDirection }) {
  return (
    <div className={`animate__animated animate__rotateInUp${animationDirection}`} id="content">
      <ul>
        <li>Project A</li>
        <li>Project B</li>
        <li>Project C</li>
      </ul>
    </div>
  );
}

export default Projects;
