import { combineReducers } from 'redux';
import AuthReducer  from './AuthReducer';
import AlertReducer from "./AlertReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    alert: AlertReducer
});

export default rootReducer;