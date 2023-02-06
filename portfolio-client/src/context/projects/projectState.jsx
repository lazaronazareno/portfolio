import { useReducer } from 'react'
import {
  ADD_PROJECT,
  GET_PROJECTS,
  EDIT_PROJECT,
  CHECK_PROJECTFORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from '../../types'
import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import clientAxios from '../../config/axios'

const ProjectState = props => {
  const initialState = {
    projects: [],
    errorForm: false,
    currentProject: null,
    error: null
  }

  const [state, dispatch] = useReducer(ProjectReducer, initialState)

  const getProjects = async () => {
    try {
      const response = await clientAxios.get('/api/projects')
      dispatch({
        type: GET_PROJECTS,
        payload: response.data
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  const addProject = async (project) => {
    try {
      const response = await clientAxios.post('/api/projects', project)
      dispatch({
        type: ADD_PROJECT,
        payload: response.data
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  const showError = () => {
    dispatch({
      type: CHECK_PROJECTFORM
    })
  }

  const setCurrentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId
    })
  }

  const editProject = async (project) => {
    console.log(project)
    try {
      const response = await clientAxios.put(`/api/projects/${project._id}`, project)
      dispatch({
        type: EDIT_PROJECT,
        payload: response.data
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  const deleteProject = async (projectId) => {
    try {
      await clientAxios.delete(`/api/projects/${projectId}`)
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      })
    } catch (error) {
      const alert = {
        msg: error.response.data,
        category: 'error'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  }

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        errorForm: state.errorForm,
        currentProject: state.currentProject,
        error: state.error,
        getProjects,
        addProject,
        editProject,
        showError,
        setCurrentProject,
        deleteProject
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState
