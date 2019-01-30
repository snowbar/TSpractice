"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmericanStyleMenuBuilder = /** @class */ (function () {
    function AmericanStyleMenuBuilder() {
        this.rate = 0.01;
        this.item = "*";
        this.output = "";
        this.breakfast = "";
        this.lunch = "";
        this.dinner = "";
        this.drink = "";
    }
    AmericanStyleMenuBuilder.prototype.shopTitle = function (title) {
        this.output += "======" + title + "======" + "\n";
    };
    AmericanStyleMenuBuilder.prototype.addBreakfast = function (breakfast, price) {
        this.breakfast += this.item + breakfast + this.makePrice(price) + "\n";
    };
    AmericanStyleMenuBuilder.prototype.addLunch = function (lunch, price) {
        this.lunch += this.item + lunch + this.makePrice(price) + "\n";
    };
    AmericanStyleMenuBuilder.prototype.addDinner = function (dinner, price) {
        this.dinner += this.dinner + dinner + this.makePrice(price) + "\n";
    };
    AmericanStyleMenuBuilder.prototype.addDrink = function (drink, price) {
        this.drink += this.item + drink + this.makePrice(price) + "\n";
    };
    AmericanStyleMenuBuilder.prototype.close = function () {
        this.output += "* Morning *\n\n";
        this.output += this.breakfast + "\n";
        this.output += "・ Lunch ・\n\n";
        this.output += this.lunch + "\n";
        this.output += "[] Dinner []\n\n";
        this.output += this.dinner + "\n";
        this.output += "+ Drink +\n\n";
        this.output += this.drink + "\n";
    };
    AmericanStyleMenuBuilder.prototype.getResult = function () {
        return this.output;
    };
    AmericanStyleMenuBuilder.prototype.makePrice = function (price) {
        return this.makeBlank() + this.convertPrice(price);
    };
    AmericanStyleMenuBuilder.prototype.convertPrice = function (price) {
        price *= this.rate;
        return "$" + price;
    };
    AmericanStyleMenuBuilder.prototype.makeBlank = function () {
        return (" : ");
    };
    return AmericanStyleMenuBuilder;
}());
exports.AmericanStyleMenuBuilder = AmericanStyleMenuBuilder;
