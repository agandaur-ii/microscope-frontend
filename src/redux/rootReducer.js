import { combineReducers } from 'redux';
import boardReducer from './board/boardReducer';
import userReducer from './user/userReducer';
import iconReducer from './icon/iconReducer';

const rootReducer = combineReducers({
    boards: boardReducer,
    user: userReducer,
    icons: iconReducer
})

export default rootReducer;