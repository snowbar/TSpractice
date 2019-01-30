"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JapaneseStyleMenuBuilder_1 = require("./JapaneseStyleMenuBuilder");
var AmericanStyleMenuBuilder_1 = require("./AmericanStyleMenuBuilder");
var CreateMenu_1 = require("./CreateMenu");
var Adapter = /** @class */ (function () {
    function Adapter() {
    }
    Adapter.prototype.getJapaneseMenu = function () {
        var builder = new JapaneseStyleMenuBuilder_1.JapaneseStyleMenuBuilder();
        this.create(builder);
        return builder.getResult();
    };
    Adapter.prototype.getAmericanMenu = function () {
        var builder = new AmericanStyleMenuBuilder_1.AmericanStyleMenuBuilder();
        this.create(builder);
        return builder.getResult();
    };
    Adapter.prototype.create = function (builder) {
        var director = new CreateMenu_1.CreateMenu(builder);
        director.construct();
    };
    return Adapter;
}());
exports.Adapter = Adapter;
