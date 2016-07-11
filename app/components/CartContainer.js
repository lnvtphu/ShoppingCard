var React = require('react');
var ListItemInCart = require('./ListItemInCart');
var Cart = require('./Cart');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var CartContainer = React.createClass({
    getInitialState: function(){
        return {
            list: Store.getList(),
            cart: Store.getCart()
        }
    },
    componentDidMount: function(){
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        Store.removeChangeListener(this._onChange);
    },
    handleAddToCart: function(index){
        var item = this.state.list[index];
        Actions.addToCart(item);
    },
    handleRemoveFromCart: function(index){
        Actions.removeFromCart(index);
    },
    _onChange: function(){
        console.log("OK");
      this.setState({
        list: Store.getList(),
        cart: Store.getCart(),
        totalMoney: Store.getTotalMoney()
      })
    },
    render: function(){
        return(
            <div className = "row">
                <div className = "col-sm-6 col-md-6 cartLeft col-sm-offset-1 col-md-offset-1">
                    <div className = "row">
                        <h2 className = "title">List Item</h2>
                    </div>
                    <div>
                        <ListItemInCart lists={this.state.list} addToCart={this.handleAddToCart} />
                    </div>
                </div>
                <div className = "col-sm-4 col-md-4 cartRight">
                    <h2 className = "title">Cart</h2>
                    <Cart carts={this.state.cart}  removeFromCart={this.handleRemoveFromCart} totalMoney={this.state.totalMoney}/>
                </div>
            </div>
        )
    }
});
module.exports = CartContainer;
