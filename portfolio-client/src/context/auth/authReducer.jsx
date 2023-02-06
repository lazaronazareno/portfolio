import {
  GET_USER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  HANDLE_LOGOUT
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      return {
        ...state,
        isAuth: true,
        error: null,
        loading: false
      }
    case ERROR_LOGIN:
    case HANDLE_LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        isAuth: null,
        error: action.payload,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        loading: false
      }
    default:
      return state
  }
}
