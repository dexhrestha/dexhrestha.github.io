import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className="project" style={{ background: `url(${project.img_src ? project.img_src : "projects/sample.png"}) center top/cover no-repeat` }}>
    <div className="content-overlay">
      <div className="content">
        <div className="title">
          <a href={project.blog_url} className='card__title_link'>{project.name}</a>
        </div>
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
