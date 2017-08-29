import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderListItem from './OrderListItem/OrderListItem'

export default class OrderListComponent extends React.Component {
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
            <div>
                {orderListData.map((item, index) => (
                    <OrderListItem key={`OrderListItem${index}`} orderListData={item} submitComment={this.props.submitComment}/>
                ))}
            </div>
        )
    }
}
