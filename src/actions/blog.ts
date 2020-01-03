import {BLOGDETAIL,BLOGDETAIL_TYPE} from '../constants'

export interface BLOGDETAILAction {
    type: BLOGDETAIL_TYPE;
    data:{}
}
export interface BlogDetail {
    name:string,
    age:string
}

// 修改博客详情
export const editBlog = (data:object):BLOGDETAILAction => ({
    type: BLOGDETAIL,
    data
});
