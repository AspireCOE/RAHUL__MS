"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rock = void 0;
var Rock = /** @class */ (function () {
    function Rock(num1, num2, num3) {
        var _this = this;
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.shape = function () {
            console.log("X IS " + _this.num1 + "  Y IS " + _this.num2 + "  Z IS " + _this.num3);
        };
    }
    Object.defineProperty(Rock.prototype, "NUM1", {
        get: function () {
            return this.num1;
        },
        set: function (value) {
            this.num1 = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rock;
}());
exports.Rock = Rock;
