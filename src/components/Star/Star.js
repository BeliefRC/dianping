import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

export default class Star extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {
            star: 0
        };
    }
    // 初始化设置星星数量
    componentDidMount() {
        this.setState({
            star: this.props.star
        })
    }
    // 点击设置星星数量
    clickHandle(star) {
        const clickCallback = this.props.clickCallback;
        // 若不存在click回调则不进行处理
        if (!clickCallback) {
            return
        }

        this.setState({
            star: star
        });
        clickCallback(star)
    }


    render() {
        let star = this.state.star || 0;
        if (star > 5) {
            star = star % 5
        }
        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = star >= item ? ' light' : '';
                    return <i key={`star${index}`} className={'icon-star' + lightClass}
                              onClick={this.clickHandle.bind(this, item)}/>
                })}
            </div>
        )
    }
}
