import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Typing from '../Typing/Typing'
import { about } from '../../portfolio'

import './About.css'


const About = () => {
  const { name, role, description, resume, social } = about
  const roles = [
    '  Data Scientist',
    '  Data Engineer',
    '  Software Engineer',
    '  Data Analyst',
  ]

  return (
    <section className='about center bordered'>

      <div className = 'about__image'/>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {/* {role && <h2 className='about__role'>A {role}.</h2>} */}
      {role && <h2 className='about__role'>A <Typing className='typing' texts={roles}/></h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

{/*       
        <Link to="/portfolio">
          <span type='button' className='btn btn--outline'>
          Portfolio
          </span>
        </Link> */}
      

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
