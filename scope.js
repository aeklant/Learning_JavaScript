/*jslint browser: true, indent: 4, maxlen: 80*/
function isNimble() {return true; }

assert(typeof window.isNimble === "function", "isNimble() defined");
assert(isNimble.name ==="isNimble", "isNimble() has a name");

var canFly = function() {return true; };
assert(typeof window.canFly === "function", "canFly() defined");
assert(window.canFly.name === "canFly", "canFly() has a name");

window.isDeadly = function() {return true; };

assert(typeof window.isDeadly === "function", "isDeadly() defined");
assert(window.isDeadly.name === "isDeadly", "isDeadly() has a name");

function outer() {
    assert(typeof inner === "function",
           "inner() in scope before declaration");

    function inner() {}
    assert(typeof inner === "function",
           "inner() in scope after declaration");
    assert(typeof window.inner === undefined,
           "inner() in global scope");
}

outer();

window.wieldSword = function swingSword() {return true; };
assert(window.wieldSword.name === "swingSword",
       "wieldSword is actually named swingSword");
