import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    LOGOUT,
} from "./userTypes";

const initialState = {
    loading: false,
    user: {},
    token: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                user: {},
                loading: true,
                token: false
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                token: action.payload.jwt
            }
        case EDIT_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: {...state.user},
                token: localStorage.getItem("token")
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                token: localStorage.getItem("token")
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

export default userReducer;