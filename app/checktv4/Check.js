var tv4 = require('tv4');

var schema = {
    "type" : "object",
    "required" : ["id","name","content","cost","image"],
    "properties" : {
        "id"    : { "type" : "string"  },
        "name"   : { "type" : "string"  },
        "content"  : { "type" : "string"   },
        "cost"  : { "type" : "number" },
        "image"  : { "type" : "string" }
    }
}
var Check ={
    checkObject: function(data){
        var result = tv4.validateMultiple(data, schema);
        var ValidationError = result.errors[0];
        var message = {
            "type": true,
            "content": ""
        }
        if(result.valid == false){
            message.type = false;
            var propertieError = ValidationError.dataPath.split("/");
            message.content = "Propertie: \'" + propertieError[1] + "\' of Book" + " - " + ValidationError.message;
            return message;
        }
        return message;
    }
}

module.exports = Check;
