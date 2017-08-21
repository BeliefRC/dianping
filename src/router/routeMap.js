import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import App from '../containers/App'
import Home from '../containers/Home/home'
import NotFound from '../containers/404'
export default class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}