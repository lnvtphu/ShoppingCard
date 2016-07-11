var React = require('react');
var Check = require('../checktv4/Check');

var AddItem = React.createClass({
    contextTypes: {
      sendItem: React.PropTypes.any
    },
    handleSubmit: function(e){
        var id = this.refs.idItem.getDOMNode().value;
        var name = this.refs.nameItem.getDOMNode().value;
        var content = this.refs.contentItem.getDOMNode().value;
        var costTemp = this.refs.costItem.getDOMNode().value;
        var cost = parseInt(costTemp);
        if(name && costTemp && id && content){
            this.refs.idItem.getDOMNode().value = '';
            this.refs.nameItem.getDOMNode().value = '';
            this.refs.costItem.getDOMNode().value = '';
            this.refs.contentItem.getDOMNode().value = '';
            var item = {
                "id": id,
                "name": name,
                "content": content,
                "cost": cost,
                "image": "http://teacherlearningsessions.com/wp-content/uploads/2016/02/BOOKLOVELOGOv2020416.png"
            }
            if(Check.checkObject(item).type == false){
                alert(Check.checkObject(item).content);
            }else {
                this.props.addItem(item);
            }
        }else{
            alert("null");
        }
    },
    render: function(){
        return (
            <div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">ID:</label>
                    <input type="text" ref="idItem" className="form-control col-sm-8 col-md-8" placeholder="ID of item"
                    //value={this.context.sendItem.id}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Name:</label>
                    <input type="text" ref="nameItem" className="form-control col-sm-8 col-md-8" placeholder="Name of item"
                    //value={this.context.sendItem.name}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Content</label>
                    <textarea rows="7" type="text" ref="contentItem" className="form-control col-sm-8 col-md-8" placeholder="Content of item"
                    //value={this.context.sendItem.content}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Pice:</label>
                    <input type="text" ref="costItem" className="form-control col-sm-8 col-md-8" placeholder="Cost of item"
                    //value={this.context.sendItem.cost}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <div className = "col-sm-8 col-md-8 col-md-offset-3 col-sm-offset-3">
                        <button className="button col-sm-4 col-md-4 col-md-offset-4 col-sm-offset-4 submit" onClick={this.handleSubmit}>Add Item</button>
                        <button className="button col-sm-4 col-md-4 col-md-offset-4 col-sm-offset-4 submit" onClick={this.handleUpdate}>Update Item</button>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = AddItem;
