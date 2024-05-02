import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({scrollToProjects,scrollToSkills,scrollToContact,hideNav}) => {
  const { homepage, title } = header
  return (
    <header className='header center'>
      
      <h3>
        {homepage ? (
          <a href='/' className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      
      {hideNav ? (<p/>):(<Navbar scrollToProjects={scrollToProjects}
        scrollToSkills={scrollToSkills}
        scrollToContact={scrollToContact}/>)}
      
    </header>
  )
}

export default Header
