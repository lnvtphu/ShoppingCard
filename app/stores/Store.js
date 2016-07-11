var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var store = {
    listItem: [
        {
            "id": "01",
            "name": "Book Love",
            "content": "I believe each of my students must craft an individual reading life of challenge, whim, curiosity, and hunger, and I've discovered that it is not too late in high school to lead a non-reader to reading. It's never too late.",
            "cost": 2595,
            "image": "http://teacherlearningsessions.com/wp-content/uploads/2016/02/BOOKLOVELOGOv2020416.png"
        },
        {
            "id": "02",
            "name": "Incognito Chrome",
            "content": "Pages you view in incognito tabs won’t stick around in your browser’s history, cookie store, or search history after you’ve closed all of your incognito tabs. Any files you download or bookmarks you create will be kept.However, you aren’t invisible. Going incognito doesn’t hide your browsing from your employer, your internet service provider, or the websites you visit.",
            "cost": 1000,
            "image": "http://teacherlearningsessions.com/wp-content/uploads/2016/02/BOOKLOVELOGOv2020416.png"
        }
    ]
};
var cart = {
    listCart: []
}
var addItem = function(item){
    store.listItem.push(item);
};

var removeItem = function(index){
    store.listItem.splice(index, 1);
};
var updateItem = function(item){
    for(i = 0; i < store.listItem.length; i++){
        if(item.id == store.listItem[i].id){
            store.listItem.splice(i, 1, item);
            return;
        }
    }
};
var addToCart = function(item){
    var itemCart = {
        "id": item.id,
        "name": item.name,
        "cost": item.cost,
        "image": item.image,
        "count": 1
    }
    if(cart.listCart.length < 1){
        cart.listCart.push(itemCart);
    }else {
        var flag = 0;
        for(i=0; i< cart.listCart.length; i++){
            if(item.id == cart.listCart[i].id){
                itemCart.count = cart.listCart[i].count +1;
                cart.listCart.splice(i, 1, itemCart);
                flag = 1;
            }
        }
        if(flag == 0){
            cart.listCart.push(itemCart);
        }
    }
};
var removeFromCart = function(index){
    cart.listCart.splice(index,1);
};
var Store = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getList: function(){
        return store.listItem;
    },
    getCart: function(){
        return cart.listCart;
    },
    getTotalMoney: function(){
        var money = 0;
        if(cart.listCart.length > 0){
            for(i = 0; i < cart.listCart.length; i++){
                money += (cart.listCart[i].count)*(cart.listCart[i].cost);
            }
        }
        return money;
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case appConstants.ADD_ITEM:
            addItem(action.data);
            Store.emit(CHANGE_EVENT);``
            break;
        case appConstants.REMOVE_ITEM:
            removeItem(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        case appConstants.ADD_TO_CART:
            addToCart(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        case appConstants.REMOVE_FROM_CART:
            removeFromCart(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        case appConstants.UPDATE_ITEM:
            updateItem(action.data);
            Store.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = Store;

 // state.users.splice(this.state.indexUser, 1, this.state.templeUser);
