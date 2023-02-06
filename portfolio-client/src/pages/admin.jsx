import React, { useContext, useEffect } from 'react'

import AuthContext from '../context/auth/authContext'
import useToken from '../hooks/useToken'
import Project from '../components/project'
import NewProject from '../components/newProject'
import ProjectContext from '../context/projects/projectContext'
import AlertContext from '../context/alert/alertContext'

const AdminPanel = () => {
  const { token } = useToken()

  const authContext = useContext(AuthContext)
  const projectsContext = useContext(ProjectContext)

  const { getUser } = authContext
  const { projects, error, getProjects } = projectsContext

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  useEffect(() => {
    if (error) {
      showAlert(error.msg, error.category)
    }
    getProjects()
  }, [error])

  useEffect(() => {
    getUser(token)
  }, [])

  return (
    <div className='admin'>
      <div className='projects'>
        <h1>Proyectos</h1>
        {projects.length === 0
          ? <span>Nop hay productos</span>
          : (
              projects.map(project => (
                <Project key={project._id} project={project} />
              ))
            )}
      </div>
      <NewProject />
      {alert
        ? (
          <div className={`error-alert ${alert.category}`}>
            {alert.msg}
          </div>
          )
        : null}
    </div>
  )
}

export default AdminPanel
