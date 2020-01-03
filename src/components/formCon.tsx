
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Form, Input, Button,InputNumber } from 'antd';
import { editBlog } from '../actions';
import { StoreState } from '../types';
import {BlogDetail} from '../actions'
// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.Component {
    componentWillMount(){

    };
    private handleSubmit = (e:any) => {
        e.preventDefault();
        (this.props as any).form.validateFields((err:any,value:BlogDetail)=>{
            if (!err){
                (this.props as any).onEditBlog(value)
                // this.onEditBlog(value)
            }
        })
    };
    public render() {
        const { getFieldDecorator } = (this.props as any).form;
        const { blog } = (this as any).props;
        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item label="姓名">
                        {getFieldDecorator('name',{
                            initialValue:blog.name
                        })(<Input placeholder="name" />)}
                    </Form.Item>
                    <Form.Item label="性别">
                        {getFieldDecorator('sex',{
                            initialValue:blog.sex
                        })(<Input placeholder="sex" />)}
                    </Form.Item>
                    <Form.Item label="年龄">
                        {getFieldDecorator('age',{
                            initialValue:blog.age
                        })(<InputNumber min={1} max={100} placeholder="age" />)}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            编辑
                        </Button>
                    </Form.Item>
                </Form>
                <hr/>
                <div>
                    <div>name: <span>{blog.name}</span></div>
                    <div>sex: <span>{blog.sex}</span></div>
                    <div>age: <span>{blog.age}</span></div>
                </div>
            </div>
    )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: StoreState): { blog: BlogDetail } => {
    const {blog} = state;
    return {
        blog,
    }
};

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onEditBlog: (data:BlogDetail) => dispatch(editBlog(data)),
});

// 使用 connect 高阶组件对 Counter 进行包裹
export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(Counter));
