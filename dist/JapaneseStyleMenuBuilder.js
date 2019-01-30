"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JapaneseStyleMenuBuilder = /** @class */ (function () {
    function JapaneseStyleMenuBuilder() {
        this.tax = 0.08;
        this.item = "*";
        this.output = "";
        this.breakfast = "";
        this.lunch = "";
        this.dinner = "";
        this.drink = "";
    }
    JapaneseStyleMenuBuilder.prototype.shopTitle = function (title) {
        this.output += "/" + title + "\\" + "\n";
        this.output += "============================|\n";
    };
    JapaneseStyleMenuBuilder.prototype.addBreakfast = function (breakfast, price) {
        this.breakfast += this.item + breakfast + this.makePrice(price) + "\n";
    };
    JapaneseStyleMenuBuilder.prototype.addLunch = function (lunch, price) {
        this.lunch += this.item + lunch + this.makePrice(price) + "\n";
    };
    JapaneseStyleMenuBuilder.prototype.addDinner = function (dinner, price) {
        this.dinner += this.dinner + dinner + this.makePrice(price) + "\n";
    };
    JapaneseStyleMenuBuilder.prototype.addDrink = function (drink, price) {
        this.drink += this.item + drink + this.makePrice(price) + "\n";
    };
    JapaneseStyleMenuBuilder.prototype.close = function () {
        this.output += "-------------朝-------------|\n\n";
        this.output += this.breakfast + "\n";
        this.output += "-------------昼-------------|\n\n";
        this.output += this.lunch + "\n";
        this.output += "-------------晩-------------|\n\n";
        this.output += this.dinner + "\n";
        this.output += "----------お飲み物----------|\n\n";
        this.output += this.drink + "\n";
    };
    JapaneseStyleMenuBuilder.prototype.getResult = function () {
        return this.output;
    };
    JapaneseStyleMenuBuilder.prototype.makePrice = function (price) {
        return this.makeBlank() + this.convertPrice(price);
    };
    JapaneseStyleMenuBuilder.prototype.convertPrice = function (price) {
        price *= 1 + this.tax;
        return price + "円";
    };
    JapaneseStyleMenuBuilder.prototype.makeBlank = function () {
        return (" : ");
    };
    return JapaneseStyleMenuBuilder;
}());
exports.JapaneseStyleMenuBuilder = JapaneseStyleMenuBuilder;
