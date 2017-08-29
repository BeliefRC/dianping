import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import Header from '../../components/Header/Header'

export default class User extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    componentDidMount() { // 如果未登录，跳转到登录页面
        if (!sessionStorage.username) {
            hashHistory.push('/Login')
        }
    }


    render() {
        return (
            <div>
                <Header title='用户中心'/>
            </div>
        )
    }
}
