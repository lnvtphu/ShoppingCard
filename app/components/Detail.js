var React = require('react');
var Store = require('../stores/Store');

var Detail = React.createClass({
    getInitialState: function(){
        return {
            list: Store.getList()
        }
    },
    findItem : function(){
        for(i = 0; i< this.state.list.length; i++){
            if(this.props.params.id == this.state.list[i].id){
                return this.state.list[i];
            }
        }
    },
    render: function(){
        var item = this.findItem();
        return(
            <div className="row">
                <div className="col-sm-10 col-md-10 col-sm-offset-1 col-md-offset-1 detailBook">
                    <div className = "col-sm-3 col-md-3">
                        <img src = {item.image} className = "imageBookDetail"/>
                    </div>

                    <div className = "col-sm-9 col-md-9 detailRight">
                        <div className="row">
                            <span className = "nameBook">{item.name}</span>
                        </div>
                        <div  className = "row">
                            <span className="contentDetail">{item.content}</span>
                        </div>
                        <div className="row costBookDetail">
                            <span>
                                Cost: {item.cost} USD
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
});
module.exports = Detail;;
