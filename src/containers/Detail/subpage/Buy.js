import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as storeActionsFromFile from '../../../actions/store'

class Buy extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <h1>buy</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);
