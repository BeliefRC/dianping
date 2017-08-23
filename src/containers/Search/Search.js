import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import SearchHeader from '../../components/SearchHeader/SearchHeader'
import SearchResultList from './subpage/SearchResultList'

class Search extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }


    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.params.keyword}/>
                <SearchResultList cityName={this.props.userInfo.cityName}
                                  category={this.props.params.category}
                                  keyword={this.props.params.keyword}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search)