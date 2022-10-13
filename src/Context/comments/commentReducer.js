import { 
    // GET_COMMENTS,
    ADD_COMMENT
 } from "../types";

const CommentReducer =  (state, action) => {
    switch (action.type) {
        // case GET_COMMENTS:
        //     return {
        //         ...state,
        //         comments: action.payload,
        //     };
        case ADD_COMMENT:
            return {
                comments: [...state.comments, action.payload]
            };
        default:
            return state;
    }
}

export default CommentReducer;