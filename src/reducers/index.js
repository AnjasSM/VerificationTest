import {combineReducers} from 'redux';
import AuthReducer from './AuthReducers';

export default combineReducers({
    pikachu: () => 'Ryan Reynold',
    auth: AuthReducer
})