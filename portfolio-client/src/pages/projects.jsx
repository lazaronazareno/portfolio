import React, { useContext, useEffect, useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import ReactImageGallery from 'react-image-gallery'
import {
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa'
import { MdDoubleArrow } from 'react-icons/md'
import { DynamicIcon } from '../utils'

import { LanguageContext } from '../context/langContext'
import ProjectContext from '../context/projects/projectContext'
import AlertContext from '../context/alert/alertContext'

const Projects = () => {
  const projectsContext = useContext(ProjectContext)
  const alertContext = useContext(AlertContext)

  const { projects, error, getProjects } = projectsContext
  const { alert, showAlert } = alertContext

  const [activeIndex, setActiveIndex] = useState(0)
  const { userLanguage } = useContext(LanguageContext)

  const handleLeftClick = () => {
    const previousIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1

    setActiveIndex(previousIndex)
  }

  const handleRightClick = () => {
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1

    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    if (error) {
      showAlert(error.msg, error.category)
    }
    getProjects()
  }, [error])

  return (
    <main>
      {alert
        ? (
          <div className={`error-alert ${alert.category}`}>
            {alert.msg}
          </div>
          )
        : null}
      {projects.map((item, index) => (
        <article
          key={index}
          data-index={index}
          data-status={activeIndex === index ? 'active' : 'inactive'}
        >
          <div
            className='article-image-section article-section'
          >
            <ReactImageGallery
              items={item.images}
              alt={userLanguage === 'es' ? item.titleEs : item.titleEn}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
              renderLeftNav={(onClick, disabled) => (
                <MdDoubleArrow size={92} className='image-left-nav' onClick={onClick} disabled={disabled} />
              )}
              renderRightNav={(onClick, disabled) => (
                <MdDoubleArrow size={92} className='image-right-nav' onClick={onClick} disabled={disabled} />
              )}
            />
          </div>
          <div className='article-description-section article-section' style={{ gap: '2rem' }}>
            <div className='article-description-stack'>
              {item.stack.map(stack => {
                return <DynamicIcon title={stack} key={stack} name={stack} size={64} />
              })}
            </div>
            <p>{userLanguage === 'es' ? item.descriptionEs : item.descriptionEn}</p>
          </div>
          <div className='article-title-section article-section'>
            <h2>{userLanguage === 'es' ? item.titleEs : item.titleEn}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {item.deploy && (
                <a type='button' href={item.deploy} target='_blank' rel='noopener noreferrer' className='button'>Visitar</a>
              )}
              <a type='button' href={item.repo} target='_blank' rel='noopener noreferrer' className='alt-button'>Repositorio</a>
            </div>
          </div>
          <div className='article-nav-section article-section'>
            <button
              className='article-nav-button'
              type='button'
              onClick={handleLeftClick}
              title='arrow'
              disabled={projects.length <= 1}
            >
              <FaArrowLeft size={92} />
            </button>
            <button
              className='article-nav-button'
              type='button'
              onClick={handleRightClick}
              title='arrow'
              disabled={projects.length <= 1}
            >
              <FaArrowRight size={92} />
            </button>
          </div>
        </article>
      ))}
    </main>
  )
}

export default Projects
