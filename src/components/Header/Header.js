import Navbar from '../Navbar/Navbar'
import './Header.css'
import { header } from '../../portfolio';

const Header = ({currentPage,scrollToProjects,scrollToSkills,scrollToContact,hideNav}) => {
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
      
      {hideNav ? (<p/>):(<Navbar currentPage={currentPage} scrollToProjects={scrollToProjects}
        scrollToSkills={scrollToSkills}
        scrollToContact={scrollToContact}/>)}
      
    </header>
  )
}

export default Header
