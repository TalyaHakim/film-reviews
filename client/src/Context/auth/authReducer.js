import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../types'

const AuthReducer =  (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
            case REGISTER_FAIL:
                localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    user: null,
                    error: action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;