import {
    FETCH_BOARDS_REQUEST,
    FETCH_BOARDS_SUCCESS,
    POST_BOARD_REQUEST,
    POST_BOARD_SUCCESS,
    EDIT_BOARD_REQUEST,
    EDIT_BOARD_SUCCESS,
    DELETE_BOARD_REQUEST,
    DELETE_BOARD_SUCCESS,
} from "./boardTypes";

const initialState = {
    boards: [],
    loading: false
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOARDS_REQUEST:
            return {
                ...state,
                boards: [],
                loading: true
            }
        case FETCH_BOARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                boards: action.payload
            }
        case POST_BOARD_REQUEST:
            return {
                ...state,
                boards: [...state.boards],
                loading: true
            }
        case POST_BOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                boards: [...state.boards, action.payload]
            }
        case EDIT_BOARD_REQUEST:
            return {
                ...state,
                boards: [...state.boards],
                loading: true
            }
        case EDIT_BOARD_SUCCESS:
            let updatedBoards = state.boards.map(board => {
                if (board.id !== action.payload.id) {
                    return board
                } else {
                    return board = action.payload
                }
            })
    
            return {
                ...state,
                boards: updatedBoards,
                loading: false
            }
        case DELETE_BOARD_REQUEST:
            return {
                ...state,
                boards: [],
                loading: true
            }
        case DELETE_BOARD_SUCCESS:
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