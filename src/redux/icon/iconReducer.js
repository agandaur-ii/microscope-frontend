import {
    FETCH_ICONS_REQUEST,
    FETCH_ICONS_SUCCESS,
    POST_ICON_REQUEST,
    POST_ICON_SUCCESS,
    EDIT_ICON_REQUEST,
    EDIT_ICON_SUCCESS,
    DELETE_ICON_REQUEST,
    DELETE_ICON_SUCCESS,
} from "./iconTypes";

const initialState = {
    icons: [],
    loading: false
}

const iconReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ICONS_REQUEST:
            return {
                ...state,
                icons: [],
                loading: true
            }
        case FETCH_ICONS_SUCCESS:
            return {
                ...state,
                icons: action.payload,
                loading: false
            }
        case POST_ICON_REQUEST:
            return {
                ...state,
                icons: [...state.icons],
                loading: true
            }
        case POST_ICON_SUCCESS:
            return {
                ...state,
                loading: false,
                icons: [...state.icons, action.payload]
            }
        case EDIT_ICON_REQUEST:
            return {
                ...state,
                icons: [...state.icons],
                loading: true
            }
        case EDIT_ICON_SUCCESS:
            let updatedIcons = state.icons.map(icon => {
                if (icon.id !== action.payload.id) {
                    return icon
                } else {
                    return icon = action.payload
                }
            })
    
            return {
                ...state,
                icons: updatedIcons,
                loading: false
            }
        case DELETE_ICON_REQUEST:
            return {
                ...state,
                icons: [],
                loading: true
            }
        case DELETE_ICON_SUCCESS:
            return {
                ...state,
                loading: false,
                icons: action.payload
            }    
        default:
            return state;
    }
}

export default iconReducer;