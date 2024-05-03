import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'
import { NavLink } from 'react-router-dom'

const ScrollToTop = ({scrollToTop}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <NavLink to="/#top">
      ‎ <ArrowUpwardIcon onClick={scrollToTop} fontSize='large' />
      </NavLink>
    </div>
  ) : null
}

export default ScrollToTop
