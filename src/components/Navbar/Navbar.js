import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = ({scrollToProjects,scrollToSkills,scrollToContact}) => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = (item) =>{
     setShowNavList(!showNavList)
     if (item==='projects'){
      scrollToProjects();
     }
     if (item==='skills'){
      scrollToSkills();
     }
     if (item==='contact'){
      scrollToContact();
     }
    }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <Link to="/research"
              
              onClick={toggleNavList}
              className='link link--nav'
            >
              Research
            </Link>
          </li>
        ) : null}

        {projects.length ? (
          <li className='nav__list-item'>
            <NavLink
            to='/#projects'
              onClick={()=>toggleNavList('projects')}
              className='link link--nav'
            >
              Projects 
            </NavLink>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <NavLink
              to='/#skills'
              onClick={()=>toggleNavList('skills')}
              className='link link--nav'
            >
              Skills
            </NavLink>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <NavLink
              to='/#contact'
              onClick={()=>toggleNavList('contact')}
              className='link link--nav'
            >
              Contact
            </NavLink>
          </li>
        ) : null}

<button
        type='button'
        onClick={toggleTheme}
        className='nav__list-item btn btn--icon'
        aria-label='toggle theme'
      >
      {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>


      </ul>

      
      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
