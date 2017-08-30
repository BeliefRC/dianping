import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getSearchData} from '../../../fetch/search/search'
import List from '../../../components/List/List'
import LoadMore from '../../../components/LoadMore/LoadMore'

let initialState = {
    listData: [],//列表数据
    hasMore: false,//是否还有数据
    page: 1,//加载更多获取的页码
    isLoadingMore: false,//当前是否正在加载
    loadCount: 1//模拟加载的次数
};
export default class SearchResultList extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = initialState
    }

    componentDidMount() {
        //首次获取页面数据
        this.loadFirstPageData()

    }

    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category
        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }
        // 重置 state
        this.setState(initialState);

        // 重新加载数据
        this.loadFirstPageData()
    }
    // 首次加载数据
    loadFirstPageData() {
        let cityName = this.props.cityName;
        let category = this.props.category;
        let keyword = this.props.keyword || '';
        const listData = getSearchData(0, cityName, category, keyword);
        this.handlerResult(listData);
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
                console.error('搜索列表模块获取数据报错, ', ex.message)
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
        let category = this.props.category;
        let keyword = this.props.keyword || '';
        let page = this.state.page;
        const listData = getSearchData(page, cityName, category, keyword);
        this.handlerResult(listData);
        this.setState({
            page: ++this.state.page,
            isLoadingMore: false,
            loadCount: ++this.state.loadCount,
        })
    }

    render() {
        return (
            <div>
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
