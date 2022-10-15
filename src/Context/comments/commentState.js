import React, { useReducer, useEffect } from 'react';
import { 
    // GET_COMMENTS,
    ADD_COMMENT
 } from '../types';
import CommentContext from '../comments/commentContext';
import CommentReducer from './commentReducer';

const CommentState = props => {

    const getStateStore = () => {
        const commetStore = localStorage.getItem('commetStore');
        return commetStore ? JSON.parse('commetStore') : []
    }

    getStateStore()

    const initialState = {
        comments: [],
    }

    const [state, dispatch] = useReducer(CommentReducer, initialState);

    useEffect(() => {
        localStorage.setItem('commetStore', JSON.stringify(state));
    }, [state])
    
    // add comment
    const addReplay = (comment) => {
        dispatch({
            type: ADD_COMMENT,
            payload: comment
        })
    }

  return (
    <CommentContext.Provider
    value = {
        {
            comments: state.comments,
            getStateStore,
            addReplay
        }
    }>
        {props.children}
    </CommentContext.Provider>
  )
}

export default CommentState;