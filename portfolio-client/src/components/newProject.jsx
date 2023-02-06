import React, { useState, useContext, useEffect } from 'react'
import ProjectContext from '../context/projects/projectContext'

const initialValues = {
  titleEs: '',
  titleEn: '',
  descriptionEs: '',
  descriptionEn: '',
  currentImage: '',
  images: [],
  currentStack: '',
  stack: [],
  deploy: '',
  repo: ''
}

const NewProject = () => {
  const projectsContext = useContext(ProjectContext)
  const { currentProject, errorForm, addProject, editProject, showError } = projectsContext

  const [values, setValues] = useState(initialValues)

  const { titleEn, titleEs, descriptionEn, descriptionEs, images, stack, deploy, repo, currentImage, currentStack } = values

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const addImage = (e) => {
    e.preventDefault()
    if (!currentImage) {
      return
    }

    const image = {
      original: currentImage,
      thumbnail: currentImage,
      originalAlt: titleEn,
      thumbnailAlt: titleEn
    }

    setValues({
      ...values,
      images: [...images, image],
      currentImage: ''
    })
  }

  const deleteImage = (index) => {
    const newImages = values.images.filter(image => image !== images[index])
    setValues({
      ...values,
      images: [...newImages]
    })
  }

  const deleteStack = (index) => {
    const newStack = values.stack.filter(newStack => newStack !== stack[index])
    setValues({
      ...values,
      stack: [...newStack]
    })
  }

  const addStack = (e) => {
    setValues({
      ...values,
      stack: [...stack, currentStack],
      currentStack: ''
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (titleEn.trim() === '' ||
      titleEs.trim() === '' ||
      descriptionEn.trim() === '' ||
      descriptionEs.trim() === '' ||
      repo.trim() === '' ||
      images.length === 0 ||
      stack.length === 0) {
      showError()
      return
    }

    const projectValues = {
      titleEs,
      titleEn,
      descriptionEs,
      descriptionEn,
      images,
      stack,
      deploy,
      repo
    }

    if (!currentProject) {
      projectValues.name = titleEn

      addProject(projectValues)
    } else {
      projectValues.name = titleEn
      projectValues._id = currentProject[0]._id

      editProject(projectValues)
    }

    setValues(initialValues)

    console.log(projectValues)
  }

  useEffect(() => {
    currentProject !== null
      ? setValues(currentProject[0])
      : setValues(initialValues)
  }, [currentProject])

  return (
    <form className='newProject-form' onSubmit={handleSubmit}>
      <div>
        <h1>{currentProject ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h1>
        {currentProject && (
          <button
            type='button'
            className='button'
            onClick={() => setValues(initialValues)}
          >
            Nuevo Proyecto
          </button>
        )}
      </div>
      <h3>Titulos <span style={{ color: 'var(--textMuted)' }}>(ES/EN)</span></h3>
      <div style={{ gap: '1rem' }}>
        <input
          type='text'
          placeholder='titleEs'
          name='titleEs'
          onChange={handleChange}
          value={titleEs}
        />
        <input
          type='text'
          placeholder='titleEn'
          name='titleEn'
          onChange={handleChange}
          value={titleEn}
        />
      </div>
      <h3>Descripciones <span style={{ color: 'var(--textMuted)' }}>(ES/EN)</span></h3>
      <div style={{ gap: '1rem' }}>
        <input
          type='text'
          placeholder='descriptionEs'
          name='descriptionEs'
          onChange={handleChange}
          value={descriptionEs}
        />
        <input
          type='text'
          placeholder='descriptionEn'
          name='descriptionEn'
          onChange={handleChange}
          value={descriptionEn}
        />
      </div>
      <h3>Deployment</h3>
      <input
        type='text'
        placeholder='deploy'
        name='deploy'
        onChange={handleChange}
        value={deploy}
      />
      <h3>Repositorio</h3>
      <input
        type='text'
        placeholder='repo'
        name='repo'
        onChange={handleChange}
        value={repo}
      />
      <h3>Imagenes</h3>
      {currentProject &&
        (values.images.map((image, index) => (
          <div key={index}>
            <input
              type='text'
              placeholder='currentImage'
              name='currentImage'
              onChange={handleChange}
              value={image.original}
              disabled
              style={{ color: 'white' }}
            />
            <img style={{ width: '5rem' }} key={image.originalAlt} src={image.original} alt={image.originalAlt} />
            <button type='button' className='button' onClick={() => deleteImage(index)}>Eliminar</button>
          </div>
        )))}
      <div>
        <input
          type='text'
          placeholder='currentImage'
          name='currentImage'
          onChange={handleChange}
          value={currentImage}
        />
        <button type='button' className='button' onClick={addImage}>Agregar</button>
      </div>
      <div style={{ justifyContent: 'flex-start', gap: '1rem' }}>
        {values.images && !currentProject &&
      (values.images.map(image => (
        <img style={{ width: '5rem' }} key={image.originalAlt} src={image.original} alt={image.originalAlt} />
      )))}
      </div>
      <h3>Stack</h3>
      {currentProject &&
        (values.stack.map((stack, index) => (
          <div key={stack}>
            <input
              type='text'
              placeholder='currentStack'
              name='currentStack'
              onChange={handleChange}
              value={stack}
              disabled
              style={{ color: 'white' }}
            />
            <button type='button' className='button' onClick={() => deleteStack(index)}>Eliminar</button>
          </div>
        )))}
      <div>
        <input
          type='text'
          placeholder='currentStack'
          name='currentStack'
          onChange={handleChange}
          value={currentStack}
        />
        <button type='button' className='button' onClick={addStack}>Agregar</button>
      </div>
      <div style={{ justifyContent: 'flex-start', gap: '1rem' }}>
        {values.stack && !currentProject &&
      (values.stack.map(stack => (
        <span key={stack}>{stack}</span>
      )))}
      </div>
      <button
        type='submit'
        className='button'
        style={{ width: '95%' }}
      >
        {currentProject ? 'Editar' : 'Registrar'}
      </button>
      {errorForm && <span style={{ color: 'crimson' }}>Todos los campos son obligatorios</span>}
    </form>
  )
}

export default NewProject
