import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(()=>{
    const storedTheme = localStorage.getItem('themeName');
    return storedTheme !== null ? storedTheme : 'light';
  });
  
  // console.log(localStorage.themeName)

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e) => {
      setThemeName(e.matches ? 'dark' : 'light');
    };
    darkMediaQuery.addEventListener('change', listener);

    return () => {
      darkMediaQuery.removeEventListener('change', listener);
    };

  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
