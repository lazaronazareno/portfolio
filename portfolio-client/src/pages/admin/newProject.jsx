import React, { useState } from 'react'

const NewProject = () => {
  const [values, setValues] = useState({
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
  })

  const [error, setError] = useState(false)

  const { titleEn, titleEs, descriptionEn, descriptionEs, images, stack, deploy, repo, currentImage, currentStack } = values

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const addImage = (e) => {
    e.preventDefault()

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
      deploy.trim() === '' ||
      repo.trim() === '') {
      setError('Todos los campos son obligatorios')
      return
    } else if (images.length === 0 || stack.length === 0) {
      setError('Introduce una imagen o stack minimo')
      return
    }

    setError(false)

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

    console.log(projectValues)
  }
  return (
    <form className='newProject-form' onSubmit={handleSubmit}>
      <h1>Nuevo Projecto</h1>
      <input
        type='text'
        placeholder='titleEs'
        name='titleEs'
        onChange={handleChange}
        value={titleEs}
      />
      <input
        type='text'
        placeholder='descriptionEs'
        name='descriptionEs'
        onChange={handleChange}
        value={descriptionEs}
      />
      <input
        type='text'
        placeholder='titleEn'
        name='titleEn'
        onChange={handleChange}
        value={titleEn}
      />
      <input
        type='text'
        placeholder='descriptionEn'
        name='descriptionEn'
        onChange={handleChange}
        value={descriptionEn}
      />
      <input
        type='text'
        placeholder='deploy'
        name='deploy'
        onChange={handleChange}
        value={deploy}
      />
      <input
        type='text'
        placeholder='repo'
        name='repo'
        onChange={handleChange}
        value={repo}
      />
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
      <button type='submit' className='button'>Registrar</button>
      {error && <span style={{ color: 'crimson' }}>{error}</span>}
    </form>
  )
}

export default NewProject
