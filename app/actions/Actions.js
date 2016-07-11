var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var Actions = {
    addItem: function(item){
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_ITEM,
            data: item
        });
    },
    removeItem: function(index){
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_ITEM,
            data: index
        })
    },
    addToCart: function(item){
        AppDispatcher.handleAction({
            actionType: appConstants.ADD_TO_CART,
            data: item
        });
    },
    removeFromCart: function(index){
        AppDispatcher.handleAction({
            actionType: appConstants.REMOVE_FROM_CART,
            data: index
        })
    }
};

module.exports = Actions;
