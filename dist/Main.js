"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("./Adapter");
var Main = /** @class */ (function () {
    function Main(style) {
        this.adapter = new Adapter_1.Adapter();
        this.style = style;
    }
    Main.prototype.judge = function () {
        if (this.style == "ja") {
            this.japanClick();
        }
        else if (this.style == "en") {
            this.usaClick();
        }
    };
    Main.prototype.japanClick = function () {
        console.log(this.adapter.getJapaneseMenu());
    };
    Main.prototype.usaClick = function () {
        console.log(this.adapter.getAmericanMenu());
    };
    return Main;
}());
if (process.argv.length == 3) {
    var main = new Main(process.argv[2]);
    main.judge();
}
else {
    console.log("usage: node Main.js ja");
    console.log("usage: node Main.js en");
}
