import React, { useReducer } from 'react';
import { 
    // GET_COMMENT,
    ADD_COMMENT
 } from '../types';
import CommentContext from '../comments/commentContext';

const CommentState = props => {

    const initialState = {
        comments: [],
    }

    const [state, dispatch] = useReducer(CommentState, initialState);

    // get comments
    // const getComments = () => {
    //     dispatch({
    //         type: GET_COMMENT,
    //         payload: 
    //     })
    // }

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
            addReplay
        }
    }>
        {props.children}
    </CommentContext.Provider>
  )
}

export default CommentState;