import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class BuyAndStore extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    buyClick() {
        this.props.buyHandle();
    }

    storeClick() {
        this.props.storeHandle();
    }

    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        // 是否已经收藏了
                        this.props.isStore
                            ? <button className="selected" onClick={this.storeClick.bind(this)}>已收藏</button>
                            : <button onClick={this.storeClick.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button className="buy" onClick={this.buyClick.bind(this)}>购买</button>
                </div>
            </div>
        )
    }
}
