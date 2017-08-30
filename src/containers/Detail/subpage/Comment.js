import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getCommentData} from '../../../fetch/detail/detail'
import LoadMore from '../../../components/LoadMore/LoadMore'
import CommentList from '../../../components/CommentList/CommentList'
import './style.less'

export default class Comment extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            commentListData: [],
            hasMore: false,//是否还有数据
            page: 1,//加载更多获取的页码
            isLoadingMore: false,//当前是否正在加载
            loadCount: 1//模拟加载的次数
        };
    }

    componentDidMount() {
        const id = this.props.id;
        const commentListData = getCommentData(0, id);
        this.handlerResult(commentListData);
    }
    // 处理请求返回的数据
    handlerResult(result) {
        result.then(res => res.json())
            .then(json => {
                if (json.data.length) {
                    this.setState({
                        commentListData: this.state.commentListData.concat(json.data),
                        hasMore: json.hasMore
                    })
                }
            }).catch(ex => {
            // 发生错误
            if (process.env.NODE_ENV === 'development') {
                console.error('评论模块获取数据报错, ', ex.message)
            }
        })
    }

    // 加载更多函数
    loadMoreFun() {
        //正在加载
        this.setState({
            isLoadingMore: true
        });
        let page = this.state.page;
        const id = this.props.id;
        const commentListData = getCommentData(page, id);
        this.handlerResult(commentListData);
        this.setState({
            page: ++this.state.page,
            isLoadingMore: false,
            loadCount: ++this.state.loadCount,
        })
    }

    render() {
        return (
            <div className="detail-comment-sub-page">
                <h2>用户点评</h2>
                {
                    this.state.commentListData.length ? <CommentList commentListData={this.state.commentListData}/> : ''
                }
                {
                    this.state.hasMore ? <LoadMore loadMoreFun={this.loadMoreFun.bind(this)}
                                                   isLoadingMore={this.state.isLoadingMore}
                                                   loadCount={this.state.loadCount}/> : ""
                }
            </div>
        )
    }
}
