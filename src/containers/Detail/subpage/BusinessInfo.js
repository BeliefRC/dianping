import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../../../components/DetailInfo/DetailInfo'
import {getInfoData} from '../../../fetch/detail/detail'

export default class BusinessInfo extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            businessInfoData: false
        };
    }

    componentDidMount() {
        let id = this.props.id;
        // 获取商户信息
        getInfoData(id)
            .then(res => {
                return res.json()
            }).then(json => {
            // 处理获取的数据
            this.setState({
                businessInfoData: json
            });
        }).catch(ex => {
            // 发生错误
            if (process.env.NODE_ENV === 'development') {
                console.error('商户详情模块获取数据报错, ', ex.message)
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.businessInfoData ?
                        <DetailInfo businessInfoData={this.state.businessInfoData}/>
                        : ''
                }
            </div>
        )
    }
}
