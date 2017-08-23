import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class SearchInput extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            value: ''
        };
    }

    // 当路由发生变化时设置value值
    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    //同步value与state
    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }

    // 敲回车时执行跳转，传递参数
    keyUpHandle(e) {
        // 未输入内容则不执行
        if (e.target.value === '') {
            return
        }
        if (e.keyCode === 13) {
            this.props.enterHandle(this.state.value);
        }
    }

    render() {
        return (
            <input className="search-input" type="text" value={this.state.value}
                   onChange={this.changeHandle.bind(this)}
                   onKeyUp={this.keyUpHandle.bind(this)}/>
        )
    }
}
