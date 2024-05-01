import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className="project">
    <div className="inner-part">
      <span className="img">
        <img id="sample" className="img-1" src={project.src} alt="Sales Dashboard" />
        <a href="#portfolio"><div className="title-overlay">{project.name}</div></a> {/* Title overlay */}
      </span>
      <div className="content">
        <div className="title">{project.name}</div>
        <div className="text">
          <p className='project__description'>{project.description}</p>
        </div>
        <div className='interact'>
          <a href="#portfolio">
            <span type='button' className='btn btn--outline'>
              Read more
            </span>
          </a>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}
          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectContainer;
