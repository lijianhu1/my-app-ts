import React from 'react';
import E from "wangeditor"
class Richtext extends React.Component{
    constructor(props:any) {
        super(props);
        this.state = {
            content: "<div>默认值</div>"
        }
    }
    componentDidMount() {
        const {content}:any = this.state;
        const elem = this.refs.editorElem; //获取editorElem盒子
        const submit:any = this.refs.submit; //获取提交按钮
        const editor = new E(elem)  //new 一个 editorElem富文本
        editor.customConfig.uploadFileName = 'upfile' //置上传接口的文本流字段
        editor.customConfig.uploadImgServer = 'https://dev.xiaomon.com/api/treeroot/v1/xxx/upload/uploadImage'//服务器接口地址
        editor.create() //创建
        editor.txt.html(content)  //设置富文本默认内容
        editor.customConfig.uploadImgHooks = {
            customInsert: function (insertImg:any, result:any, editor:any) {
                var url = result.url  //监听图片上传成功更新页面
                insertImg(url)
            }
        }
        submit.addEventListener('click', () => {  //监听点击提交按钮
            // 读取 html
            this.setState({
                content: editor.txt.html()  //获取富文本内容
            },()=>{
                console.log(this.state)
            })
        }, false)
    }
    render(){
        return (
            <div id="rich-text">
                <div ref="editorElem"/>
                <div ref="submit">提交</div>
            </div>
        )
    }
}
export default Richtext
