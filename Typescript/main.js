"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("finally the value is " + i);
}
doSomething();
var Rock_1 = require("./Rock");
var ob = new Rock_1.Rock(5, 5, 5);
console.log(ob.NUM1);
ob.NUM1 = 7;
console.log(ob.NUM1);
ob.shape();
