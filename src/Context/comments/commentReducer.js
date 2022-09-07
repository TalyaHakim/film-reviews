import { 
    GET_COMMENT,
    ADD_COMMENT
 } from "../types";

const CommentReducer =  (state, action) => {
    switch (action.type) {
        // case GET_COMMENT:
        //     return {
        //         ...state,
        //         comments: action.payload,
        //     };
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...comments, {comment: action.payload}]
            };
        default:
            return state;
    }
}

export default CommentReducer;