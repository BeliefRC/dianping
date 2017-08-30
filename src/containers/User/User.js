import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'
import Header from '../../components/Header/Header'
import UserInfo from '../../components/UserInfo/UserInfo'
import OrderList from './subpage/OrderList'

 class User extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    componentDidMount() {
        // 如果未登录，跳转到登录页面
        if (!sessionStorage.username) {
            hashHistory.push('/Login')
        }
    }

    render() {
        const userInfo = this.props.userInfo;
        return (
            <div>
                <Header title='用户中心'/>
                <UserInfo username={sessionStorage.username} cityName={userInfo.cityName}/>
                <OrderList username={sessionStorage.username}/>
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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)