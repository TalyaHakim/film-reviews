import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    // USER_LOADED,
    // AUTH_ERROR,
    // LOGIN_SUCCESS,
    // LOGIN_FAIL,
    // LOGOUT,
    // CLEAR_ERRORS
} from '../types'

const AuthState = props => {
    
    const initialState = {
        token: localStorage.getItem('Token'),
        isAuthenticated: null,
        user: null,
        error: null
    }

const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Load User

    // Login User

    // Register User
    const register = async formData => {
        const config = {
            headers: {
              'content-Type': 'application/json'
            }
          }
          try {
            const res = await axios.post('http://localhost:5000/api/users', formData, config)
            dispatch({
              type: REGISTER_SUCCESS,
              payload: res.data
            });
            // loadUser();
          } catch (err) {
            dispatch({
              type: REGISTER_FAIL,
              payload: err.response.data.msg
            })
    }}

    // Log Out

    // Clear Errors

  return (
    <AuthContext.Provider
    value= {
        {
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            error: state.error,
            register
        }
    }>
    {props.children}
  </AuthContext.Provider>   
  )
}

export default AuthState