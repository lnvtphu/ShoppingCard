var React = require('react');

var Cart = React.createClass({
    render: function(){
        var list = this.props.carts.map(function(item, index){
            var nameItem = item.name
            if(item.name.length > 15){
                nameItem = item.name.substring(0,12)+"...";
            }
            return (
                <li key={index} className="list-group-item listGroup fontSizeCart" >

                    <div className = "col-sm-3 col-md-3">
                        <img src = {item.image} className = "imageBookInCart"/>
                    </div>
                    <div className = "col-sm-8 col-md-8">
                        <div>
                            <span title = {item.name} className = "nameBookInCart">{nameItem}</span>
                        </div>
                        <div>
                            <span>
                                Numbers: {item.count}
                            </span>
                        </div>
                        <div>
                            <span>
                                Money: {(item.cost)*(item.count)} USD
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="glyphicon glyphicon-remove removeItem" onClick={this.props.removeFromCart.bind(null,index)}></span>
                    </div>
                    <div className="clear"></div>
                </li>
            )
        }.bind(this));
        return (
            <div>
                <ul className="uList">
                    {list}
                </ul>
                <ul className="uList">
                    <li className="list-group-item listGroup">
                        <span className="text-center">Total Money: {this.props.totalMoney} USD</span>
                    </li>
                </ul>
            </div>
        )
    }
});
module.exports = Cart;
