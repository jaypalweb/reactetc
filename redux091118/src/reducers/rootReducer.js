import userReducer from './userReducer';
import postReducer from './postReducer';
import {combineReducers} from 'redux';
const rootReducer=combineReducers({userReducer});

export default rootReducer;
