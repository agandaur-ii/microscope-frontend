import { api } from './api';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCESS,
    FETCH_USER_FAILURE,
    POST_NEW_USER
} from "./userTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCESS,
        payload: user
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        error: error
    }
}

export const postNewUserSuccess = (newUser) => {
    return {
        type: POST_NEW_USER,
        payload: newUser
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        //api.auth
    }
}
