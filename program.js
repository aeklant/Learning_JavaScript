var stooge = {
    // These are invalid Javascript names (because of the "-"),
    // so they will have to be accessed via "[]", not "." 
    "first-name":"Jerome",
    "last-name":"Betis"
}

if ( typeof Object.create !== 'function' ) {
    Object.create = function(obj) {
        var F = function() {};
        F.prototype = obj;      
        return new F();
    };
}

var stooge_1 = stooge;
var stooge_2 = Object.create(stooge);

stooge_1.middle_name = 'monkey'
stooge_2.nickname = 'james'

document.writeln('Stooge 1: first name, middle name, last name');
document.writeln(stooge_1['first-name'], " ", stooge_1.middle_name, " ", stooge_1['last-name']);

document.writeln('Stooge 2: first name, nickname , last name');
document.writeln(stooge_2['first-name'], " '", stooge_2.nickname, "' ", stooge_2['last-name']);
