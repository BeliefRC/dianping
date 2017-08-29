import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star/Star'
import './style.less'

export default class OrderListItem extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            //0：未评价，1：评价中,2：已评价
            commentState: 0,
            commentText: '',
            commentPrompt: '评论点什么吧~',
            stars: {}
        };
    }

    // 同步文本框内容
    changeCommentText(e) {
        this.setState({
            commentText: e.target.value
        })
    }

    // 点击评论
    clickComment() {
        this.setState({
            commentState: 1
        })
    }

    // 点击提交评论
    submitComment() {
        let commentText = this.state.commentText.trim();
        if (!commentText) {
            this.setState({
                commentPrompt: "评论不能为空"
            });
            return
        }
        let submitComment = this.props.submitComment,
            id = this.props.orderListData.id,
            comment = this.state.commentText,
            star = this.state.stars[id] || '0';
        submitComment(id, comment, star, this.commentOk.bind(this))

    }

    // 点击取消
    clickCancel() {
        this.setState({
            commentState: 0
        })
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    //发送请求操作
    /*    handlerComment() {
            let submitComment = this.props.submitComment,
                id = this.props.orderListData.id,
                comment = this.state.commentText,
                star = this.state.stars[id] || '0';
            submitComment(id, comment, star, this.commentOk.bind(this))
        }*/

    //设置星星的数量
    starClickCallback(star) {
        let stars = this.state.stars;
        const id = this.props.orderListData.id;
        stars[id] = star;
        this.setState({
            stars: stars
        })
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.orderListData.commentState
        })
    }

    render() {
        let orderListData = this.props.orderListData;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={orderListData.img} alt={orderListData.title}/>
                </div>
                <div className="order-item-comment float-right">
                    {this.state.commentState === 0 ?
                        <button className="btn" onClick={this.clickComment.bind(this)}>评价</button>
                        : this.state.commentState === 1 ? '' :
                            <button className="btn unseleted-btn">已评价</button>}
                </div>
                <div className="order-item-content">
                    <span>商户：{orderListData.title}</span>
                    <span>数量：{orderListData.count}</span>
                    <span>价格：￥{orderListData.price}</span>
                </div>
                {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                            <textarea style={{width: '100%', height: '80px'}} className="comment-text"
                                      placeholder={this.state.commentPrompt}
                                      value={this.state.commentText}
                                      onChange={this.changeCommentText.bind(this)}/>
                            <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                                <Star star="0" clickCallback={this.starClickCallback.bind(this)}/>
                            </div>
                            <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unseleted-btn" onClick={this.clickCancel.bind(this)}>取消</button>
                        </div>
                        : ''
                }
            </div>
        )
    }
}
