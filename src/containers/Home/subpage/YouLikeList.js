import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData} from '../../../fetch/home/home'
import List from '../../../components/List/List'
import LoadMore from '../../../components/LoadMore/LoadMore'
import './style.less'

export default class YouLikeList extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            listData: [],//列表数据
            hasMore: false,//是否还有数据
            page: 1,//加载更多获取的页码
            isLoadingMore: false,//当前是否正在加载
            loadCount: 1//模拟加载的次数
        };
    }

    // 处理获取的数据（公共操作）
    handlerResult(result) {
        result.then(res => res.json())
            .then(json => {
                if (json.data.length) {
                    this.setState({
                        listData: this.state.listData.concat(json.data),
                        hasMore: json.hasMore
                    })
                }
            }).catch(ex => {
            // 发生错误
            if (process.env.NODE_ENV === 'development') {
                console.error('首页猜你喜欢模块获取数据报错, ', ex.message)
            }
        })
    }

    // 加载更多函数
    loadMoreFun() {
        //正在加载
        this.setState({
            isLoadingMore: true
        });
        let cityName = this.props.cityName;
        let page = this.state.page;
        const listData = getListData(cityName, page);
        this.handlerResult(listData);
        this.setState({
            page: ++this.state.page,
            isLoadingMore: false,
            loadCount: ++this.state.loadCount,
        })
    }

    componentDidMount() {
        //首次获取页面数据
        let cityName = this.props.cityName;
        const listData = getListData(cityName, 0);
        this.handlerResult(listData);
    }

    render() {
        return (
            <div className="home-list-container">
                <h2 className="home-list-title">- 猜你喜欢 -</h2>
                {
                    this.state.listData.length ?
                        <List listData={this.state.listData}/>
                        : '加载失败'
                }
                {
                    this.state.hasMore ?
                        <LoadMore loadMoreFun={this.loadMoreFun.bind(this)}
                                  isLoadingMore={this.state.isLoadingMore}
                                  loadCount={this.state.loadCount}/> : ''
                }
            </div>
        )
    }
}
