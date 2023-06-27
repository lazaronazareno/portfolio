import React, { useContext } from 'react'
import { languageOptions } from './index'
import { LanguageContext } from '../context/langContext'

export default function LanguageSelector ({ handleNavToggle }) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  const handleClick = (lang) => {
    userLanguageChange(lang)
    handleNavToggle()
  }

  return (
    <>
      {Object.entries(languageOptions).map((lang) => (
        <span className={`lang-text ${userLanguage === lang[0] ? 'text-active' : ''}`} key={lang} onClick={() => handleClick(lang[0])}>{lang[0]}</span>
      ))}
    </>
  )
};
