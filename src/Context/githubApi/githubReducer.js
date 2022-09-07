import { 
    GET_MOVIE,
 } from "../types";

const GithubReducer =  (state, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                movies: action.payload,
            };
        default:
            return state;
    }
}

export default GithubReducer;