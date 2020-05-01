import { combineReducers } from 'redux';
import boardReducer from './board/boardReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    boards: boardReducer,
    user: userReducer
})

export default rootReducer;