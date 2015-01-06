/*jslint browser: true, indent: 4, maxlen: 80*/
var assert;

assert = function (value, desc) {
    "use strict";
    var li;

    li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
};
