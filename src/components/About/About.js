import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
// import Typing from '../Typing/Typing'
import { about } from '../../portfolio'

import './About.css'
import { FlipWords } from '../ui/flipWords'
import { Typing } from '../Typing/Typing'


const About = ({loaded}) => {
  const { name, role, description, resume, social } = about
  const roles = [
    'Data Scientist',
    'Data Engineer',
    'Software Engineer',
    'Data Analyst',
  ]

  return (
    <section className='about center bordered'>

      <div className = 'animated animatedFadeInUp fadeInUp about__image'/>
      {name && (
        <h1 id="myname">
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='fade-in' style={{flexDirection:'row'}}>
        <Typing words={roles}/>
      </h2>
    }
      
      <p className='fade-in  about__desc'>{description && description}</p>

      <div className='fade-in  about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

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
    </section>
  )
}

export default About
