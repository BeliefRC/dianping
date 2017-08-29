import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderListComponent from '../../../components/OrderListComponent/OrderListComponent'
import {getOrderListData, postComment} from '../../../fetch/user/orderList'
import './style.less'

export default class OrderList extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            orderListData: []
        };
    }

    componentDidMount() {
        const username = this.props.username;
        this.loadOrderListData(username);
    }

    loadOrderListData(username) {
        getOrderListData(username)
            .then(res => {
                return res.json()
            }).then(json => {
            this.setState({
                orderListData: json
            })
        }).catch(ex => {
            if (process.env.NODE_ENV === 'development') {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }

    // 点击提交评论
    submitComment(id, comment, star, callback) {
        const result = postComment(id, comment, star, callback);
        result.then(res => {
            return res.json()
        }).then(json => {
            // console.log(123);
            if (json.error === 0) {
                // 已经评价，修改状态
                callback()
            }
        })
    }


    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.orderListData.length
                        ? <OrderListComponent orderListData={this.state.orderListData}
                                              submitComment={this.submitComment.bind(this)}/>
                        : <div>加载中</div>
                }
            </div>
        )
    }
}
