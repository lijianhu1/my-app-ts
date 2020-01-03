import React from 'react';
import '../style/blog.scss'
import {Icon} from 'antd'
export default  class Blog extends React.Component{
    state={
        blogList:[{
            id:1,
            title:'陌上花开，可缓缓归矣'
        },{
            id:2,
            title:'岁月留痕'
        },]
    };
    componentDidMount() {
    }
    render(){
        return (
            <div id="blog">
                <aside className="aside">
                    <span className="avatar">
                        <img src={require('../images/blog/photo.jpg')} alt=""/>
                    </span>
                    <div className="topspaceinfo">
                        <h3>执子之手，与子偕老</h3>
                        <p>于千万人之中，我遇见了我所遇见的人....</p>
                    </div>
                    <div className="blog-list">
                        <span className="aside-title">最近博客</span>
                        <ul>
                        {
                            this.state.blogList.map((item,index)=>{
                                return <li key={index}>{item.title}</li>
                            })
                        }
                      </ul>
                    </div>
                </aside>
                <div className="main">
                    <div className="article-title">
                        <h3>陌上花开，可缓缓归矣</h3>
                    </div>
                    <div className="article-detail">
                            <p>“陌上花开，可缓缓归矣。” 含义：（夫人），田间阡陌上的花开了，你可以一边赏花，一边慢慢地回来。</p>
                            <p>“陌上花开，如果没有悄然伫立阡陌并为陌上风情所陶醉的人，那么花开也寂寞，风情也苍白....”喜欢这句话，是因为看了忍冬的作品《陌上花开缓缓归》</p>
                            <p>阳春三月，风和日暖，信步城外，看阡陌之上的杨柳依依，野花绚烂，身心不由得轻爽而浪漫。“三月风情陌上花”，古远的诗句似乎随风从天边飘来，从历史的深处飘来，拂过阡陌，袭上心头，诗是属于清乾嘉诗人赵翼的，可昂首远望，眼前的陌上风情却是不折不扣的现代，由眼帘入心扉。</p>
                            <p className="textimg"><img src={require('../images/blog/text.jpg')} alt="" /></p>
                            <p>漫步陌上，心情是诗意的那种，优雅而散淡，不惹匆促，只因陌上花开；花是自然的那种，朴素而恬淡，不落尘俗。“三月风情陌上花”，是花在其中生命得以璀璨，人在其中心情得以畅然的一种意境。三月陌上花，让人爱让人痴，恍惚人的骨子里头都沉淀了花的影子，花的风韵。</p>
                            <p>陌上花开，如果没有了从俗累的生活中走出来，悄然伫立阡陌并为陌上风情所陶醉的人，那么花开也寂寞，风情也苍白。于是，一句“陌上花开，可缓缓归矣”不知被多少人吟诵了多少遍。人归缓缓，那花便有灵性，便开得执著，陌上风情也被撩拨得浓郁而热烈。</p>
                            <p>缓缓归，缓缓归，披一袭“三月风情”，再采一束“陌上花”，缓缓归。</p>
                            <p>缓缓归矣，我心已是陌上花开。</p>
                    </div>
                    <div className="article-footer">
                        <span className="foot-item">
                            <Icon type="like" />
                            <span>10</span>
                        </span>
                        <span className="foot-item">
                            <Icon type="dislike" />
                            <span>0</span>
                        </span>
                        <span className="foot-item">
                            <Icon type="message" />
                            <span>评论</span>
                        </span>
                        {/*<Icon type="dislike" theme="filled" />*/}
                        {/*<Icon type="like" theme="filled" />*/}


                    </div>
                </div>
            </div>
        )
    }
}
