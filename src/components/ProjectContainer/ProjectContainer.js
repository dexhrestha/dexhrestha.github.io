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
        <a href="portfolio" type='link'><span className="title">{project.name}</span></a>
        <div className="text">
          <p className='project__description'>{project.description}</p>
        </div>
        <div className='interact'>
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
