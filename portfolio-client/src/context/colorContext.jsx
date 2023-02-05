import React, { createContext, useEffect, useState } from 'react'

const themes = {
  theme1: {
    bg: '#060b19',
    border: '#F99417',
    textDark: '#222222',
    textLight: '#fafafa',
    textMuted: '#909090'
  },
  theme2: {
    bg: '#222831',
    border: '#00ADB5',
    textDark: '#393E46',
    textLight: '#EEEEEE',
    textMuted: '#909090'
  },
  theme3: {
    bg: '#060b19',
    border: '#38E54D',
    textDark: '#222222',
    textLight: '#fafafa',
    textMuted: '#909090'
  },
  theme4: {
    bg: '#08D9D6',
    border: '#FF2E63',
    textDark: '#EAEAEA',
    textLight: '#252A34',
    textMuted: '#343434'
  },
  theme5: {
    bg: '#FFFBF5',
    border: '#674188',
    textDark: '#fafafa',
    textLight: '#222222',
    textMuted: '#909090'
  }
}

export const ColorContext = createContext({
  theme: themes.theme1,
  changeTheme: () => {}
})

export default function ColorProvider ({ children }) {
  const [theme, setTheme] = useState(() => {
    const defaultColor = window.localStorage.getItem('color')
    return defaultColor ? JSON.parse(defaultColor) : themes.theme1
  })

  const changeTheme = () => {
    if (theme === themes.theme1) {
      setTheme(themes.theme2)
      window.localStorage.setItem('color', JSON.stringify(themes.theme2))
    } else if (theme === themes.theme2) {
      setTheme(themes.theme3)
      window.localStorage.setItem('color', JSON.stringify(themes.theme3))
    } else if (theme === themes.theme3) {
      setTheme(themes.theme4)
      window.localStorage.setItem('color', JSON.stringify(themes.theme4))
    } else if (theme === themes.theme4) {
      setTheme(themes.theme5)
      window.localStorage.setItem('color', JSON.stringify(themes.theme5))
    } else {
      setTheme(themes.theme1)
      window.localStorage.setItem('color', JSON.stringify(themes.theme1))
    }
  }

  const setCSSVariables = theme => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value])
    }
  }

  useEffect(() => {
    setCSSVariables(theme)
  }, [theme])

  return (
    <ColorContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ColorContext.Provider>
  )
}
