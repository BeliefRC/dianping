import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'

import Header from '../../components/Header/Header'
import LoginComponent from '../../components/LoginComponent/LoginComponent'

class Login extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            checking: true
        };
    }

    componentDidMount() {
        this.doChecking()
    }

    // 页面初始化检查
    doChecking() {
        // 已登录，跳转用户中心
        if (sessionStorage.username) {
            this.goUserPage();
        }
        // 未登录，显示登录页面
        else {
            this.setState({
                checking: false
            })
        }
    }
    // 跳转用户中心
    goUserPage() { 
        hashHistory.push('/user')
    }

    // 处理登陆按钮点击事件
    loginHandle(username) {
        const actions = this.props.userInfoActions,
            router = this.props.params.router;
        let userInfo = this.props.userInfo;
        // 储存用户名
        this.props.userInfo.username = username;
        sessionStorage.username = username;
        //更新用户名
        actions.update(userInfo);
        // 跳转到登陆前的页面
        if (router) {
            hashHistory.push(router)
        }
        else {
            this.goUserPage()
        }

    }

    render() {
        return (<div>
                {
                    this.state.checking ? <div>loading</div> :
                        <div>
                            <Header title="登录"/>
                            < LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                        </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
