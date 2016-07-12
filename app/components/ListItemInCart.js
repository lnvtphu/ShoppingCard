var React = require('react');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var ListItemInCart = React.createClass({
    render: function(){
        var list = this.props.lists.map(function(item, index){
            return (
                <li key={index} className="list-group-item listGroup listItemInCart" onClick={this.props.addToCart.bind(null, index)}>
                    <div className = "col-sm-3 col-md-3">
                        <img src = {item.image} className = "imageBook"/>
                    </div>
                    <div className = "col-sm-9 col-md-9">
                        <div>
                            <span className = "nameBook">{item.name}</span>
                        </div>
                        <div className = "contentBook">
                            <span>{item.content.substring(0,170)}...</span>
                        </div>
                        <div className = "row">
                            <span className = "col-sm-6 col-md-6 text-center">
                                Cost: {item.cost} USD
                            </span>
                        </div>
                    </div>
                    <div className="clear"></div>
                </li>
            )
        }.bind(this));
        return (
            <ul className="uList">
                {list}
            </ul>
        )
    }
});

module.exports = ListItemInCart;
