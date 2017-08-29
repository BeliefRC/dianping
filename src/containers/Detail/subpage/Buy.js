import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as storeActionsFromFile from '../../../actions/store'
import {hashHistory} from 'react-router'
import BuyAndStore from '../../../components/BuyAndStore/BuyAndStore'

class Buy extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            isStore: false//是否收藏
        };
    }

    // 登录校验
    loginCheck() {
        const id = this.props.id;
        // 判断是否登录
        if (!sessionStorage.username) {
            // 跳转到登录前的页面
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id));
            return false
        }
        return true
    }

    isStoreCheck() {
        const id = this.props.id,
            store = this.props.store;//[]
        store.map(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                });
                return true
            } else {
                return false
            }
        })
    }

    storeHandle() {
        const loginCheck = this.loginCheck();
        //没登录终止操作
        if (!loginCheck) {
            return false
        }
        // 检查是否已经收藏
        this.isStoreCheck();
        // 商户id
        const id = this.props.id,
            storeActions = this.props.storeActions;
        // 已被收藏，点击取消收藏
        if (this.state.isStore) {
            storeActions.rm({id: id})
            // 没有收藏，点击收藏
        } else {
            storeActions.add({id: id})
        }
        // 更改收藏状态
        this.setState({
            isStore: !this.state.isStore
        })
    }

    buyHandle() {
        const loginCheck = this.loginCheck();
        //没登录终止操作
        if (!loginCheck) {
            return false
        }
        // 登陆了跳转到用户中心
        hashHistory.push('/user')
    }

    componentDidMount() {
        this.isStoreCheck();
    }

    render() {
        return (
            <BuyAndStore isStore={this.state.isStore} storeHandle={this.storeHandle.bind(this)}
                         buyHandle={this.buyHandle.bind(this)}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);
