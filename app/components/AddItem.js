var React = require('react');
var Check = require('../checktv4/Check');
var LinkState = require('react-link-state');

var AddItem = React.createClass({
    contextTypes: {
      sendItem: React.PropTypes.any
    },
    getInitialState: function(){
        return {
            id: "",
            name: "",
            content: "",
            cost: 0
        }
    },
    handleSubmit: function(){
        if((this.state.name == "") || (this.state.cost == "") || (this.state.id = "") || (this.state.content == "")){
            alert("null");
        }else{
            var item = {
                "id": this.state.id,
                "name": this.state.name,
                "content": this.state.content,
                "cost": parseInt(this.state.cost),
                "image": "http://teacherlearningsessions.com/wp-content/uploads/2016/02/BOOKLOVELOGOv2020416.png"
            }
            if(Check.checkObject(item).type == false){
                alert(Check.checkObject(item).content);
            }else {
                this.props.addItem(item);
                this.setState({
                    id: "",
                    name: "",
                    content: "",
                    cost: 0
                });
            }
        }
    },
    render: function(){
        return (
            <div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">ID:</label>
                    <input type="text" ref="idItem" className="form-control col-sm-8 col-md-8" placeholder="ID of item"
                    //onChange={this.onChangeIdItem}
                    valueLink={LinkState(this, 'id')}
                    //value={this.context.sendItem.id}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Name:</label>
                    <input type="text" ref="nameItem" className="form-control col-sm-8 col-md-8" placeholder="Name of item"
                    //value={this.context.sendItem.name}
                    valueLink={LinkState(this, 'name')}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Content</label>
                    <textarea rows="7" type="text" ref="contentItem" className="form-control col-sm-8 col-md-8" placeholder="Content of item"
                    //value={this.context.sendItem.content}
                    valueLink={LinkState(this, 'content')}
                    />
                </div>
                <div className = "row col-sm-12 col-md-12 rowAddItem">
                    <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Pice:</label>
                    <input type="text" ref="costItem" className="form-control col-sm-8 col-md-8" placeholder="Cost of item"
                    //value={this.context.sendItem.cost}
                    valueLink={LinkState(this, 'cost')}
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
