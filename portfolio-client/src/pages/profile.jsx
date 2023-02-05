import React, { useContext } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload
} from 'react-icons/fa'
import {
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJss,
  SiReact,
  SiMysql
} from 'react-icons/si'
import { MdDoubleArrow } from 'react-icons/md'
import './profile.css'
import { Text } from '../lang/text'
import { LanguageContext } from '../context/langContext'
import { dictionaryList } from '../lang'

const Profile = () => {
  const { userLanguage } = useContext(LanguageContext)

  return (
    <main className='profile'>
      <article>
        <div
          className='article-profile-section article-section'
        >
          <h1>Lazaro Vega Sanchez</h1>
          <h2><Text tid='occupation' /></h2>
          <div className='article-description'>
            <MdDoubleArrow />
            <span><Text tid='intro' /></span>
          </div>
          <div className='article-links'>
            <a type='button' href='https://github.com/lazaronazareno' title='github' target='_blank' rel='noopener noreferrer'>
              <FaGithub size={80} />
            </a>
            <a type='button' href='https://www.linkedin.com/in/lazaro-vega-sanchez' title='linkedin' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin size={80} />
            </a>
            <a type='button' href={userLanguage === 'es' ? dictionaryList.es.cvLink : dictionaryList.en.cvLink} title='cv' target='_blank' rel='noopener noreferrer' download>
              <FaFileDownload size={80} />
            </a>
          </div>
        </div>
        <div className='article-stack'>
          <SiHtml5 size={64} />
          <SiCss3 size={64} />
          <SiJss size={64} />
          <SiReact size={64} />
          <SiNodedotjs size={64} />
          <SiMysql size={64} />
        </div>
        <div className='article-footer-links'>
          <a type='button' href='mailto:lazaronazareno@gmail.com?Subject=Contact%20from%20portfolio' target='_blank' rel='noopener noreferrer'>
            <h2>lazaronazareno@gmail.com</h2>
          </a>
          <a type='button' href='https://github.com/lazaronazareno' target='_blank' rel='noopener noreferrer'>
            <h2>github/lazaronazareno</h2>
          </a>

        </div>
        <div className='article-footer-copy'>
          <h2><Text tid='copyright' /> &copy;2023</h2>
        </div>
      </article>
    </main>
  )
}

export default Profile
