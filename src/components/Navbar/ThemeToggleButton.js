import React, { useContext } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'

const ThemeToggleButton = React.memo(() => {
  const { themeName, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      type='button'
      onClick={toggleTheme}
      className='nav__list-item btn btn--icon'
      aria-label='toggle theme'
    >
      {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
    </button>
  )
})

export default ThemeToggleButton
