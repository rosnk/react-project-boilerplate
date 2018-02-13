import { combineReducers } from 'redux';
import hotel from './hotelReducer';

const rootReducer = combineReducers({
    hotel
});


export default rootReducer;