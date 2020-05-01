import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
    loading: false,
    user: {}
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
                boards: action.payload
            }
        default:
            return state;
    }
}

export default boardReducer;