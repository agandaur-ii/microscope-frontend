import {
    FETCH_BOARDS_REQUEST,
    FETCH_BOARDS_SUCCESS,
    FETCH_BOARDS_FAILURE,
    POST_BOARD_REQUEST,
    POST_BOARD_SUCCESS,
    POST_BOARD_FAILURE,
    EDIT_BOARD_REQUEST,
    EDIT_BOARD_SUCCESS,
    EDIT_BOARD_FAILURE,
    DELETE_BOARD_REQUEST,
    DELETE_BOARD_SUCCESS,
    DELETE_BOARD_FAILURE
} from "./boardTypes";
import { api } from '../../api'

export const fetchBoards = () => {
    return(dispatch) => {
        dispatch(fetchBoardsRequest());
        api.boards.getBoards()
        .then(data => {
            if (data.error) {
                dispatch(fetchBoardsFailure(data.error))
            } else {
                dispatch(fetchBoardsSuccess(data.data))
            }
        })
    }
}

export const fetchBoardsRequest = () => {
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

export const postBoard = (newBoard) => {
    return(dispatch) => {
        dispatch(postBoardRequest())
        api.boards.createBoard(newBoard)
        .then(data => {
            if (data.error) {
                dispatch(postBoardFailure(data.error))
            } else {
                dispatch(postBoardSuccess(data.data))
                console.log(data, "DATA RETURNED FROM RAILS")
            }
        })
    }
}

export const postBoardRequest = () => {
    return {
        type: POST_BOARD_REQUEST
    }
}

export const postBoardSuccess = (newBoard) => {
    return {
        type: POST_BOARD_SUCCESS,
        payload: newBoard
    }
}

export const postBoardFailure = (error) => {
    return {
        type: POST_BOARD_FAILURE,
        payload: error
    }
}

export const editBoard = (newBoardData) => {
    return(dispatch) => {
        dispatch(editBoardRequest())
        api.boards.editBoard(newBoardData)
        .then(data => {
            if (data.error) {
                dispatch(editBoardFailure(data.error))
            } else {
                dispatch(editBoardSuccess(data.data))
            }
        })
    }
}

export const editBoardSuccess = (newBoardData) => {
    return {
        type: EDIT_BOARD_SUCCESS,
        payload: newBoardData
    }
}

export const editBoardRequest = () => {
    return {
        type: EDIT_BOARD_REQUEST
    }
}

export const editBoardFailure = (error) => {
    return {
        type: EDIT_BOARD_FAILURE,
        payload: error
    }
}

export const deleteBoard = (boardId) => {
    return(dispatch) => {
        dispatch(deleteBoardRequest())
        api.boards.deleteBoard(boardId)
        .then(data => {
            if (data.error) {
                dispatch(deleteBoardFailure(data.error))
            } else {
                dispatch(deleteBoardSuccess(data.data))
            }
        })
    }
}

export const deleteBoardSuccess = (boardId) => {
    return {
        type: DELETE_BOARD_SUCCESS,
        payload: boardId
    }
}

export const deleteBoardRequest = () => {
    return {
        type: DELETE_BOARD_REQUEST
    }
}

export const deleteBoardFailure = (error) => {
    return {
        type: DELETE_BOARD_FAILURE,
        payload: error
    }
}