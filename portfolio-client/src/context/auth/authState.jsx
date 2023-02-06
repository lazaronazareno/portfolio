import React, { useReducer } from 'react'
import {
  GET_USER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  HANDLE_LOGOUT
} from '../../types'
import AuthReducer from './authReducer'
import AuthContext from './authContext'
import clientAxios from '../../config/axios'
import { tokenAuth } from '../../config/tokenAuth'
import useToken from '../../hooks/useToken'

const AuthState = props => {
  const { token, setToken, deleteToken } = useToken()
  const initialState = {
    token,
    isAuth: null,
    user: null,
    error: null,
    loading: true
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const getUser = async (token) => {
    if (token) {
      tokenAuth(token)
    }

    try {
      const response = await clientAxios.get('/api/auth')

      dispatch({
        type: GET_USER,
        payload: response.data.user
      })
    } catch (error) {
      deleteToken()

      dispatch({
        type: ERROR_LOGIN
      })
    }
  }

  const login = async (values) => {
    try {
      const response = await clientAxios.post('/api/auth/', values)

      setToken(response.data.token)

      dispatch({
        type: SUCCESS_LOGIN
      })

      getUser(response.data.token)
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'error'
      }

      deleteToken()

      dispatch({
        type: ERROR_LOGIN,
        payload: alert
      })
    }
  }

  const logout = () => {
    deleteToken()

    dispatch({
      type: HANDLE_LOGOUT
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        user: state.user,
        error: state.error,
        loading: state.loading,
        login,
        getUser,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
