var stooge = {
    // These are invalid Javascript names (because of the "-"),
    // so they will have to be accessed via "[]", not "." 
    "first-name":"Jerome",
    "last-name":"Betis"
}

if ( typeof Object.create !== function ) {
    Object.create = function(obj) {
        var F = function() {};
        F.prototype = obj;      
        return new F();
    };
}

var stooge_1 = stooge();
var stooge_2 = Object.create(stooge);

document.writeln('Stooge 1: name');
