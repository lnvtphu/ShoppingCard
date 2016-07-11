var React = require('react');

var ListItem = React.createClass({
    handlePhu: function(item){
        this.props.setSendItem(item);
    },
    render: function(){
        var listItems = this.props.items.map(function(item, index){
            return (
                <li key={index} className="list-group-item listGroup row" >
                    <div className = "col-sm-3 col-md-3">
                        <img src = {item.image} className = "imageBook"/>
                    </div>
                    <div className = "col-sm-8 col-md-8">
                        <div>
                            <span className = "nameBook">{item.name}</span>
                        </div>
                        <div  className = "detailBook">
                            <span>{item.content.substring(0,200)}...</span>
                        </div>
                        <div className = "row">
                            <span className = "col-sm-6 col-md-6 text-center">
                                Cost: {item.cost} USD
                            </span>
                            <div className = "col-sm-6 col-md-6 text-center">
                                <span className="glyphicon glyphicon-edit editItem" title = "Edit Book" onClick={this.handlePhu.bind(null, item)}>
                                </span>
                                <span className="glyphicon glyphicon-remove removeItem" title = "Remove Book" onClick={this.props.removeItem.bind(null, index)}>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
            )
    }.bind(this));
    return (
        <div>
            <h3 className = "title">List Book</h3>
            <ul className="uList">
                {listItems}
            </ul>
        </div>
        )
    }
});

module.exports = ListItem;
