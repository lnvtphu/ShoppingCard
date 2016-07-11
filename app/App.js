var React = require('react');
var Admin = require('./components/Admin');
var About= require('./components/About');
var CartContainer = require('./components/CartContainer');
var Link = require('react-router').Link;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var App = React.createClass({
    render: function(){
        return (
            <div className="container main">
                <div className="row">
                    <ul className="nav nav-tabs col-sm-10 col-md-10 col-sm-offset-1 col-md-offset-1">
                        <li role="presentation"><Link to = "/">Home</Link></li>
                        <li role="presentation"> <Link to = "/admin">Admin</Link></li>
                        <li role="presentation"><Link to = "/about">About</Link></li>
                    </ul>
                </div>
                <div className = "row">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

React.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={CartContainer} />
            <Route path="admin" component={Admin} />
            <Route path="about" component={About} />
        </Route>
    </Router>
  ,document.getElementById('app')
)
