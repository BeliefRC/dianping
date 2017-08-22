import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../until/localStore'
import {CITYNAME} from '../config/localStoreKey'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../actions/userInfo'

class App extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        // 初始状态
        this.state = {
            initDone: false
        };
    }

    componentDidMount() {
        // 从localstorage中获取城市信息
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '武汉'
        }

        // 将城市信息存储到redux
        this.props.userInfoActions.update({
            cityName:cityName
        });

        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 1)
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone ?
                        this.props.children :
                        <div>加载中...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
