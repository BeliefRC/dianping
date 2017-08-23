import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link,hashHistory} from 'react-router'
import SearchInput from '../SearchInput/SearchInput'
import './style.less'

export default class HomeHeader extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }
    //路由跳转
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"/>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"/>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"/>
                        <SearchInput value='' enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}
