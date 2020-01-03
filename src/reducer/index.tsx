import {combineReducers} from 'redux';
import count from './count';
import blog from './blog'
const appReducer = combineReducers({
    count,
    blog
});
export default appReducer;
