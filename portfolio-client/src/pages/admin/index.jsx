import React from 'react'
import Project from './project'

const AdminPanel = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bienvenido</h1>
      <button>Nuevo</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Proyectos</h1>
        <Project />
        <div>
          <h2>Anime song Rater</h2>
          <button>Eliminar</button>
          <button>Editar</button>
        </div>
        <div>
          <h2>Connect 4</h2>
          <button>Eliminar</button>
          <button>Editar</button>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
