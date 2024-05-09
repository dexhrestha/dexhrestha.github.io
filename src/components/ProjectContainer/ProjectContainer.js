import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className="project">
    <div className="inner-part">
        <span className="img">
        <img id="sample" className="img-1" src={project.img_src?project.img_src:"projects/sample.png"} alt="Sales Dashboard" />
        <a href={project.blog_url}><div className="title-overlay">{project.name}</div></a> {/* Title overlay */}
      </span>
      <div className="content">
        <div className="title"><a href={project.blog_url} className='card__title_link'>{project.name}</a></div>
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
