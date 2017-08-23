import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/HomeAd'
import {getAdData} from '../../../fetch/home/home'

export default class Ad extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        // 获取广告数据
        const result = getAdData();
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json;
            if (data.length) {
                this.setState({
                    data: data
                });
            }
        }).catch(ex => {
            // 发生错误
            if (process.env.NODE_ENV === 'development') {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
    }

    render() {
        let ad = this.state.data.length ? <HomeAd data={this.state.data}/> : <div>加载失败！</div>;
        return (
            <div>
                {ad}
            </div>
        )
    }
}
