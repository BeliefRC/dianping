import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import LocalStore from '../../until/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import Header from '../../components/Header/Header'
import CurrentCity from '../../components/CurrentCity/CurrentCity'
import CityList from '../../components/CityList/CityList'


class City extends React.Component {
    // 构造
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        // 初始状态
        this.state = {};
    }

    changeCity(cityName) {
        this.props.userInfoActions.update({
            cityName
        });
        LocalStore.setItem(CITYNAME, cityName);
        hashHistory.push('/')

    }

    render() {
        return (
            <div>
                <Header title='选择城市'/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeCityFun={this.changeCity.bind(this)}/>
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
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)