import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { about } from '../../portfolio'

import './About.css'

const AboutMin = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>

      <div className = 'about__image_min'/>
      {name && (
        <h5>
          Hi, I am <span className='about__name'>{name}.</span>
        </h5>
      )}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.instagram && (
              <a
                href={social.instagram}
                aria-label='instagram'
                className='link link--icon'
              >
                <InstagramIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AboutMin
