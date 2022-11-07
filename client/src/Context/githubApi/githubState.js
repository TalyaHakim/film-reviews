import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { 
    GET_MOVIE,
} from '../types';


const GithubState = props => {

    const initialState = {
        movies: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const baseURL = `https://api.themoviedb.org/3`;

    //get movies arr
    const fetchDada = async () => {
        const {data: {results}} = await axios.get(`${baseURL}/discover/movie?api_key=${
            process.env.REACT_APP_MOVIE_API_KEY}`
        )
        dispatch({
            type: GET_MOVIE,
            payload: results
        })
        }
    
    // search movie
    const searchMovie = async searchTxt => {
        const {data: {results}} = await axios.get(`${baseURL}/search/movie?api_key=${
        process.env.REACT_APP_MOVIE_API_KEY}&query=${searchTxt}`)
        dispatch({
            type: GET_MOVIE,
            payload: results
        })  
        }

  return (
    <GithubContext.Provider
    value= {
        {
            movies: state.movies,
            fetchDada,
            searchMovie
        }
    }>
        {props.children}
      </GithubContext.Provider>   
  )
}

export default GithubState;