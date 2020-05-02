import {
    FETCH_BOARDS_REQUEST,
    FETCH_BOARDS_SUCCESS,
    FETCH_BOARDS_FAILURE,
    POST_BOARD,
} from "./boardTypes";
import { api } from '../../api'

export const fetchBoardsRequest= () => {
    return {
        type: FETCH_BOARDS_REQUEST
    }
}

export const fetchBoardsSuccess = (boards) => {
    return {
        type: FETCH_BOARDS_SUCCESS,
        payload: boards
    }
}

export const fetchBoardsFailure = (error) => {
    return {
        type: FETCH_BOARDS_FAILURE,
        payload: error
    }
}

export const postBoardSuccess = (newBoard) => {
    return {
        type: POST_BOARD,
        payload: newBoard
    }
}

export const fetchBoards = () => {
    return(dispatch) => {
        dispatch(fetchBoardsRequest());
        api.boards.getBoards()
        .then(data => {
            if (data.error) {
                dispatch(fetchBoardsFailure(data.error))
            } else {
                dispatch(fetchBoardsSuccess(data))
            }
        })
    }
}

export const postBoard = () => {
    return(dispatch) => {
        dispatch(fetchBoardsRequest())
        api.boards.createBoard()
        .then(data => {
            if (data.error) {
                dispatch(fetchBoardsFailure(data.error))
            } else {
                dispatch(postBoardSuccess(data))
            }
        })
    }
}