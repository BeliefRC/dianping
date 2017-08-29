import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App'
import Home from '../containers/Home/Home'
import City from '../containers/City/City'
import Search from '../containers/Search/Search'
import Detail from '../containers/Detail/Detail'
import Login from '../containers/Login/Login'
import User from '../containers/User/User'

import NotFound from '../containers/404'
export default class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login(/:router)' component={Login}/>
                    <Route path='/user' component={User}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
