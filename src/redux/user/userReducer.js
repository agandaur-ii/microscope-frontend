import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    SET_USER,
    LOGOUT,
} from "./userTypes";

const initialState = {
    loading: false,
    user: {},
    token: false
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.jwt
            }
        case SET_USER:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.jwt
            }
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                loading: false,
                user: {},
                token: false
            }
        default:
            return state;
    }
}

export default boardReducer;