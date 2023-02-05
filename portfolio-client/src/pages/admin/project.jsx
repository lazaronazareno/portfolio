import React from 'react'

const Project = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <h1>Nombre projecto</h1>
      <span>Descripcion</span>
      <span>stack</span>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  )
}

export default Project
