import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentListItem from './CommentListItem/CommentListItem'
import './style.less'

export default  class CommentList  extends React.Component {
    // 构造
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }
    render() {
        let commentListData=this.props.commentListData;
        return (
            <div className="comment-list">
                {commentListData.map((item, index) => {
                    return <CommentListItem key={index} commentListData={item}/>
                })}
            </div>
        )
    }
}
