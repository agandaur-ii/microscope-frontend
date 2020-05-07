import {
    FETCH_ICONS_REQUEST,
    FETCH_ICONS_SUCCESS,
    FETCH_ICONS_FAILURE,
    POST_ICON_REQUEST,
    POST_ICON_SUCCESS,
    POST_ICON_FAILURE,
    EDIT_ICON_REQUEST,
    EDIT_ICON_SUCCESS,
    EDIT_ICON_FAILURE,
    DELETE_ICON_REQUEST,
    DELETE_ICON_SUCCESS,
    DELETE_ICON_FAILURE
} from "./iconTypes";
import { api } from '../../api'

export const fetchIcons = () => {
    return(dispatch) => {
        dispatch(fetchIconsRequest());
        api.icons.getIcons()
        .then(data => {
            if (data.error) {
                dispatch(fetchIconsFailure(data.error))
            } else {
                dispatch(fetchIconsSuccess(data.data))
            }
        })
    }
}

export const fetchIconsRequest = () => {
    return {
        type: FETCH_ICONS_REQUEST
    }
}

export const fetchIconsSuccess = (icons) => {
    return {
        type: FETCH_ICONS_SUCCESS,
        payload: icons
    }
}

export const fetchIconsFailure = (error) => {
    return {
        type: FETCH_ICONS_FAILURE,
        payload: error
    }
}

export const postIcon = (newIcon) => {
    return(dispatch) => {
        dispatch(postIconRequest())
        api.icons.createIcon(newIcon)
        .then(data => {
            if (data.error) {
                dispatch(postIconFailure(data.error))
            } else {
                dispatch(postIconSuccess(data.data))
            }
        })
    }
}

export const postIconRequest = () => {
    return {
        type: POST_ICON_REQUEST
    }
}

export const postIconSuccess = (newIcon) => {
    return {
        type: POST_ICON_SUCCESS,
        payload: newIcon
    }
}

export const postIconFailure = (error) => {
    return {
        type: POST_ICON_FAILURE,
        payload: error
    }
}

export const editIcon = (newIconData) => {
    return(dispatch) => {
        dispatch(editIconRequest())
        api.icons.editIcon(newIconData)
        .then(data => {
            if (data.error) {
                dispatch(editIconFailure(data.error))
            } else {
                dispatch(editIconSuccess(data.data))
            }
        })
    }
}

export const editIconSuccess = (newIconData) => {
    return {
        type: EDIT_ICON_SUCCESS,
        payload: newIconData
    }
}

export const editIconRequest = () => {
    return {
        type: EDIT_ICON_REQUEST
    }
}

export const editIconFailure = (error) => {
    return {
        type: EDIT_ICON_FAILURE,
        payload: error
    }
}

export const deleteIcon = (iconId) => {
    return(dispatch) => {
        dispatch(deleteIconRequest())
        api.icons.deleteIcon(iconId)
        .then(data => {
            if (data.error) {
                dispatch(deleteIconFailure(data.error))
            } else {
                dispatch(deleteIconSuccess(data.data))
            }
        })
    }
}

export const deleteIconSuccess = (iconId) => {
    return {
        type: DELETE_ICON_SUCCESS,
        payload: iconId
    }
}

export const deleteIconRequest = () => {
    return {
        type: DELETE_ICON_REQUEST
    }
}

export const deleteIconFailure = (error) => {
    return {
        type: DELETE_ICON_FAILURE,
        payload: error
    }
}