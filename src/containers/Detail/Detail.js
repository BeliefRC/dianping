import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/Header'
import BusinessInfo from './subpage/BusinessInfo'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'

export default  class Detail  extends React.Component {
    // 构造
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }
    render() {
        // 商户id
        let id=this.props.params.id;
        return (
            <div>
                <Header title='商户详情'/>
                <BusinessInfo id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
