import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import cryptoReducer from './CryptoReducer';

const rootReducer = combineReducers({ filterReducer, cryptoReducer });

export default rootReducer;
