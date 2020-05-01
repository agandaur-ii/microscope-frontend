import {
    FETCH_BOARDS_REQUEST,
    FETCH_BOARDS_SUCCESS,
    POST_BOARD,
} from "./boardTypes";

const initialState = {
    boards: [],
    loading: false
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_BOARD:
            return {
                ...state,
                loading: false,
                boards: [...state.boards, action.payload]
            }
        case FETCH_BOARDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BOARDS_SUCCESS:
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