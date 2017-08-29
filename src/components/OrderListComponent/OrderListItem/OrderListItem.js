import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class OrderListItem extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    render() {
        let orderListData = this.props.orderListData;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={orderListData.img} alt=""/>
                </div>
                <div className="order-item-comment float-right">
                    <button>评价</button>
                </div>
                <div className="order-item-content">
                    <span>商户：{orderListData.title}</span>
                    <span>数量：{orderListData.count}</span>
                    <span>价格：￥{orderListData.price}</span>
                </div>
            </div>
        )
    }
}
