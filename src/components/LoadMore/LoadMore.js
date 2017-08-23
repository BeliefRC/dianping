import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

let maxCount = 10;//模拟最大加载资源的次数
export default class LoadMore extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    //处理点击加载更多
    handlerLoadMoreFun() {
        if (this.props.loadCount > maxCount) {
            return
        }
        this.props.loadMoreFun();
    }

    componentDidMount() {
        const _this = this;
        const loadMore = this.refs.loadMore;
        let timeoutId;

        function callback() {
            // 加载更多元素高度
            let loadMoreHeight = loadMore.offsetHeight;
            // 元素距离顶部的距离
            let top = loadMore.getBoundingClientRect().top;
            // 客户端高度
            let windowHeight = window.screen.height;
            let allTop = .8 * loadMoreHeight + top;
            if (allTop && allTop < windowHeight) {
                // 证明 loadMore 已经被滚动到暴露在页面可视范围之内了
                _this.handlerLoadMoreFun();
            }
        }
        // 监听滚动条
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 200)
        }, false)
    }

    render() {
        let isLoadingMore = this.props.isLoadingMore;
        let loadCount = this.props.loadCount;

        return (
            <div className="load-more" ref="loadMore">
                {
                    loadCount > maxCount ? <span>没有更多了~</span> :
                        isLoadingMore ?
                            <span>正在加载...</span> :
                            <span onClick={this.handlerLoadMoreFun.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}
