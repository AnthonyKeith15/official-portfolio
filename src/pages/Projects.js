import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import data from './data.json';

import './Projects.css';

class Projects extends Component {
  state = {
    activeProjectIndex: 0
  }

  setActiveProject = (index) => {
    this.setState({ activeProjectIndex: index });
  }

  render() {
    const activeProject = data[this.state.activeProjectIndex];

    return (
      <>
        <div className='stats'>
          <div className='filler project'>
        <div className='project-buttons'>
          {data.map((project, index) => (
            <button
              key={project.title}
              onClick={() => this.setActiveProject(index)}
              className={index === this.state.activeProjectIndex ? 'active project-button-list' : 'project-button-list'}
            >
              <h4 className='project-title'>

              {project.title}
              </h4>
            </button>
          ))}
        </div>
          </div>
        </div>
        <div className='projects'>
          {activeProject && <ProjectItem project={activeProject} />}
        </div>
      </>
    );
  }
}

export default Projects;

const ProjectItem = ({ project }) => {
  return (
    <div className='hero'>
      <div className='project-image'>
        <img src={project.imageSrc} alt={project.imageAlt} />
      </div>
      <div className='project-details'>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className='project-links'>
          {project.githubLink && (
            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
              <Icon icon='akar-icons:github-fill' />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
              <Icon icon='bx:bxs-show' />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


