import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import nameReducer from '../reducers/updateNameReducer';
const store=createStore(combineReducers({nameReducer}),applyMiddleware(logger));
export default store;