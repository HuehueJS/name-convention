const global_functions = {

    getattr : function(obj,key,value=undefined){
        return key in obj ? obj[key] : value;
    }

}


module.exports = global_functions