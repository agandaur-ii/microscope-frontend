import { api } from '../../api';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    SET_USER,
    LOGOUT,
    DELETE_USER
} from "./userTypes";

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        //api.auth
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

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT
    }
}