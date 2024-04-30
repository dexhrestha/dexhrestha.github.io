import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({hideNav}) => {
  const { homepage, title } = header
  return (
    <header className='header center'>
      
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      
      {hideNav ? (<p/>):(<Navbar />)}
      
    </header>
  )
}

export default Header
