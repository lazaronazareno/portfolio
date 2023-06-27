import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, CHECK_PROJECTFORM, CURRENT_PROJECT, EDIT_PROJECT, DELETE_PROJECT, ERROR_PROJECT } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: !state.form
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload.sort(() => 0.5 - Math.random())
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorForm: false
      }
    case CHECK_PROJECTFORM:
      return {
        ...state,
        errorForm: true
      }
    case CURRENT_PROJECT:
      return {
        ...state,
        currentProject: state.projects.filter(project => project._id === action.payload)
      }
    case EDIT_PROJECT:
      return {
        ...state,
        projects: state.projects.map(project => project._id === action.payload._id ? action.payload : project),
        currentProject: null
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project._id !== action.payload),
        currentProject: null
      }
    case ERROR_PROJECT:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
