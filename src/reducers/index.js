import { combineReducers } from 'redux';
import productosReducers from './productosReducer';
import validacionReducers from './validacionReducers';

export default combineReducers({
    productos: productosReducers,
    error: validacionReducers
});