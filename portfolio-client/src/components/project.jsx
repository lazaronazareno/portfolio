import React, { useContext } from 'react'
import ProjectContext from '../context/projects/projectContext'

const Project = ({ project }) => {
  const projectsContext = useContext(ProjectContext)
  const { setCurrentProject, deleteProject } = projectsContext

  const { name, descriptionEs, stack, _id } = project

  const handleDelete = () => {
    deleteProject(_id)
  }

  const handleEdit = () => {
    setCurrentProject(_id)
  }

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <h2>{name}</h2>
        <p>{descriptionEs}</p>
        {stack.map(stack => (
          <span key={stack}>{stack}</span>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className='button' onClick={handleEdit}>Editar</button>
        <button className='alt-button' onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  )
}

export default Project
