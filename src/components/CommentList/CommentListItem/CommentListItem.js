import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../../components/Star/Star'
import './style.less'

export default class CommentListItem extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    render() {
        let item = this.props.commentListData;
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"/>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        )
    }
}
