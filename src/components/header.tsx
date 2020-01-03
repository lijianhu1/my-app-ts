import React from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import { withRouter,RouteComponentProps } from "react-router-dom"
class HeaderComponent extends React.Component<RouteComponentProps> {
    state = {
        nav: ''
    };
    componentDidMount(){
        this.setState({
            nav:this.props.location.pathname
        })
    };
    handleClick = (e: { key: any; }) => {
        this.setState({
            nav: e.key,
        });
    };

    render() {
        return (
            <header id="header">
                <div className="wrap">
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.nav]} mode="horizontal">
                        <Menu.Item key="/">
                            <Link to='/' >首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/us">
                            <Link to='us'>我们的故事</Link>
                        </Menu.Item>
                        <Menu.Item key="/blog">
                            <Link to='blog'>博客</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
