/*jslint browser: true, indent: 4, maxlen: 80*/
function Ninja(a, b) {
    "use strict";
    this.a = a;
    this.b = b;
    this.skulk = function () {return this; };
}

var ninja1,
    ninja2;

ninja1 = new Ninja(1,2);
ninja2 = new Ninja(2,1);

assert(ninja1.skulk().a === 2,
       "ninja1's a is 2");
assert(ninja1.skulk().b === 1,
       "ninja1's b is 1");
assert(ninja2.skulk() === ninja2,
       "The second ninja is skulking");
