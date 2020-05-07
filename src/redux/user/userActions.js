import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
    LOGOUT,
} from "./userTypes";
import { api } from '../../api'

export const fetchUser = (fields) => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        api.auth.login(fields).then(data => {
            if (data.error) {
                dispatch(fetchUserFailure(data.error))
            } else {
            localStorage.setItem("token", data.jwt);
            dispatch(fetchUserSuccess(data))
            }
        })
    }
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        error: error
    }
}

export const editUser = (userObject) => {
    return (dispatch) => {
        dispatch(editUserRequest());
        api.user.editUser(userObject)
        .then(data => {
            if (data.error) {
                dispatch(editUserFailure(data.error))
            } else {
                dispatch(editUserSuccess(data))
            }
        })
    }
}

export const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST
    }
}

export const editUserSuccess = (user) => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: user
    }
}

export const editUserFailure = (error) => {
    return {
        type: EDIT_USER_FAILURE,
        error: error
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}