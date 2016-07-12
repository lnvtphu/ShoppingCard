var React = require('react');
var AddItem = require('./AddItem');
var List = require('./ListItem');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');
var Check = require('../checktv4/Check');
var LinkState = require('react-link-state');

var Admin = React.createClass({
    getInitialState: function(){
        return {
            titleButton: "Add Item",
            update: false,
            id: "",
            name: "",
            content: "",
            cost: "",
            list: Store.getList()
        }
    },
    componentDidMount: function(){
        Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        Store.removeChangeListener(this._onChange);
    },
    handleRemoveItem: function(index){
        Actions.removeItem(index);
    },
    setSendItem: function (item) {
        this.setState({
            titleButton: "Update Item",
            update: true,
            id: item.id,
            name: item.name,
            content: item.content,
            cost: item.cost
        });
    },
    _onChange: function(){
        this.setState({
            list: Store.getList()
        })
    },
    handleSubmit: function(){
        if((this.state.name == "") || (this.state.cost == "") || (this.state.id == "") || (this.state.content == "")){
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
                switch (this.state.update) {
                    case false:
                        Actions.addItem(item);
                        break;
                    case true:
                        Actions.updateItem(item);
                        this.setState({
                            update: false,
                            titleButton: "Add Item"
                        })
                        break;
                    default:
                    }
                this.setState({
                    id: "",
                    name: "",
                    content: "",
                    cost: ""
                });
            }
        }
    },
    render: function(){
        return (
            <div className="col-sm-8 col-md-8 col-md-offset-2 col-sm-offset-2">
                <div className="row">
                    <div className="col-sm-12 addBook">
                        <h2 className = "title">Add Book</h2>

                        <div className = "row col-sm-12 col-md-12 rowAddItem">
                            <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">ID:</label>
                             <input type="text" ref="idItem" className="form-control col-sm-8 col-md-8" placeholder="ID of item"
                             disabled={this.state.update}
                             valueLink={LinkState(this, 'id')}
                             />
                        </div>
                        <div className = "row col-sm-12 col-md-12 rowAddItem">
                            <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Name:</label>
                            <input type="text" ref="nameItem" className="form-control col-sm-8 col-md-8" placeholder="Name of item"
                            valueLink={LinkState(this, 'name')}
                            />
                        </div>
                        <div className = "row col-sm-12 col-md-12 rowAddItem">
                            <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Content</label>
                            <textarea rows="7" type="text" ref="contentItem" className="form-control col-sm-8 col-md-8" placeholder="Content of item"
                            valueLink={LinkState(this, 'content')}
                            />
                        </div>
                        <div className = "row col-sm-12 col-md-12 rowAddItem">
                            <label className = "col-sm-2 col-md-2 col-sm-offset-1 col-md-offset-1">Pice:</label>
                            <input type="text" ref="costItem" className="form-control col-sm-8 col-md-8" placeholder="Cost of item"
                            valueLink={LinkState(this, 'cost')}
                            />
                        </div>
                        <div className = "row col-sm-12 col-md-12 rowAddItem">
                            <div className = "col-sm-8 col-md-8 col-md-offset-3 col-sm-offset-3">
                                <button className="button col-sm-4 col-md-4 col-md-offset-4 col-sm-offset-4 submit" onClick={this.handleSubmit}>{this.state.titleButton}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className ="listBook">
                        <List items={this.state.list} removeItem={this.handleRemoveItem}  setSendItem={this.setSendItem}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Admin;
