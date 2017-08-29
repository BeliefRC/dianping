import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import './style.less'

export default class UserInfo extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    clickLogout() {
        sessionStorage.username = "";
        hashHistory.push('/')
    }

    render() {
        return (
            <div className="user-info-container clear-fix">
                <div className="float-left">
                    <p>
                        <i className="icon-user"/>
                        &nbsp;
                        <span>{this.props.username}</span>
                    </p>
                    <p>
                        <i className="icon-map-marker"/>
                        &nbsp;
                        <span>{this.props.cityName}</span>
                    </p>
                </div>
                <div className="logout float-right">
                    <button onClick={this.clickLogout.bind(this)}>退出登录</button>
                </div>
            </div>
        )
    }
}
