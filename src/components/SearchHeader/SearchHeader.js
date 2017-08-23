import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import SearchInput from '../SearchInput/SearchInput'
import './style.less'

export default class SearchHeader extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }


    //返回按钮返回主页
    clickHandle() {
        hashHistory.push('/')
    }

    //点击回车时路由跳转
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }

    render() {
        return (
            <div className="search-header clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"/>
                </span>
                <div className="input-container">
                    <i className="icon-search"/>
                    &nbsp;
                    <SearchInput value={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
}
