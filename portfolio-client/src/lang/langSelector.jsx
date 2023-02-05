import React, { useContext } from 'react'
import { languageOptions } from './index'
import { LanguageContext } from '../context/langContext'

export default function LanguageSelector () {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  return (
    <>
      {Object.entries(languageOptions).map((lang) => (
        <span className={`lang-text ${userLanguage === lang[0] ? 'text-active' : ''}`} key={lang} onClick={() => userLanguageChange(lang[0])}>{lang[0]}</span>
      ))}
    </>
  )
};
