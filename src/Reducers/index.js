import { combineReducers } from 'redux';
import filterReducer from './FilterReducer';
import cryptoReducer from './CryptoReducer';
import selectCryptoReducer from './selectedCrypto';

const rootReducer = combineReducers({ filterReducer, cryptoReducer, selectCryptoReducer });

export default rootReducer;
