import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { ThemeContext } from '../../contexts/theme'
import { projects,blogs, skills, contact } from '../../portfolio'
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

    const isHomePage =   window.location.hash === '' ||  window.location.hash === '#/'  ||  window.location.hash === '#/#projects'  ||  window.location.hash === '#/#skills'  ||  window.location.hash === '#/#contact' ;  
    console.log(window.location)
  
  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
          {!isHomePage?(  <li className='nav__list-item'>
            <Link
              to='/'
              onClick={() => toggleNavList('top')}
              className='link link--nav'
            >
              Home
            </Link>
          </li>):null}

          {isHomePage && blogs.length ? (
          <li className='nav__list-item'>
            <NavLink
              to='#blogs'
              onClick={() => toggleNavList('blogs')}
              className='link link--nav'
            >
              Blogs
            </NavLink>
          </li>
        ) : null}

        {isHomePage && projects.length ? (
          <li className='nav__list-item'>
            <NavLink
              to='#projects'
              onClick={() => toggleNavList('projects')}
              className='link link--nav'
            >
              Projects
            </NavLink>
          </li>
        ) : null}

        {isHomePage && skills.length ? (
          <li className='nav__list-item'>
            <NavLink
              to='#skills'
              onClick={() => toggleNavList('skills')}
              className='link link--nav'
            >
              Skills
            </NavLink>
          </li>
        ) : null}

        {isHomePage && contact.email ? (
          <li className='nav__list-item'>
            <NavLink
              to='#contact'
              onClick={()=>toggleNavList('contact')}
              className='link link--nav'
            >
              Contact
            </NavLink>
          </li>
        ) : null}


<li className='nav__list-item'>
          <Link to="/research"
            onClick={toggleNavList}
            className='link link--nav'
          >
            Research
          </Link>
        </li>

        <li className='nav__list-item'>
          <Link to="/portfolio"
            onClick={toggleNavList}
            className='link link--nav'
          >
            portfolio
          </Link>
        </li>

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
