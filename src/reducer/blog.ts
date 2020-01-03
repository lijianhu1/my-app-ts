import { BLOGDETAIL } from '../constants';
import {BLOGDETAILAction} from '../actions'
let blog = {
    name:"lijianhui",
    sex:'男',
    age:'28'
};

// 处理并返回 state
export default (state = blog, action:BLOGDETAILAction) => {
    switch (action.type) {
        case BLOGDETAIL:
           return Object.assign({},state,action.data);
        default:
            return state;
    }
}
