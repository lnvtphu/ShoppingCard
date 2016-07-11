var React = require('react');
var AddItem = require('./AddItem');
var List = require('./ListItem');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');

var ListContainer = React.createClass({
  getInitialState: function(){
      return {
          sendItem: {},
          list: Store.getList()
      }
  },
  componentDidMount: function(){
      Store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
      Store.removeChangeListener(this._onChange);
  },
  handleAddItem: function(item){
      Actions.addItem(item);
  },
  handleRemoveItem: function(index){
      Actions.removeItem(index);
  },
  childContextTypes: {
      sendItem: React.PropTypes.any
  },
  getChildContext: function () {
      return {
          sendItem: this.state.sendItem
      };
  },
  setSendItem: function (item) {
      this.setState({
          sendItem: item
      });
  },
  _onChange: function(){
      this.setState({
          list: Store.getList()
      })
  },
  render: function(){
    return (
      <div className="col-sm-8 col-md-8 col-md-offset-2 col-sm-offset-2">
        <div className="col-sm-12 addBook">
          <h2 className = "title">Add Book</h2>
          <AddItem addItem={this.handleAddItem}/>
          <List items={this.state.list} removeItem={this.handleRemoveItem}  setSendItem={this.setSendItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;
