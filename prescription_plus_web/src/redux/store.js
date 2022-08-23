import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import RxReducer from './reducers';

const rootReducer = combineReducers({ RxReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));