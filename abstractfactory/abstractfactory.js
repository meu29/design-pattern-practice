/* アブストラクトファクトリーパターン */
/* tsc abstractfactory.ts */
/* node abstractfactory.js */
var Beaf = /** @class */ (function () {
    function Beaf() {
        this.name = "牛肉";
    }
    return Beaf;
}());
var Pork = /** @class */ (function () {
    function Pork() {
        this.name = "豚肉";
    }
    return Pork;
}());
var WineSauce = /** @class */ (function () {
    function WineSauce() {
        this.name = "赤ワインソース";
    }
    return WineSauce;
}());
var OnionSauce = /** @class */ (function () {
    function OnionSauce() {
        this.name = "玉ねぎソース";
    }
    return OnionSauce;
}());
var Steak = /** @class */ (function () {
    function Steak() {
    }
    Steak.prototype.select_meat = function (meat) {
        this.meat = meat;
    };
    Steak.prototype.select_sauce = function (sauce) {
        this.sauce = sauce;
    };
    return Steak;
}());
/* アブストラクトファクトリーを介さずに実行 */
var steak_1 = new Steak();
steak_1.select_meat(new Beaf());
steak_1.select_sauce(new WineSauce());
var steak_2 = new Steak();
steak_2.select_meat(new Pork());
steak_2.select_sauce(new OnionSauce());
console.log(steak_1);
console.log(steak_2);
/* 牛肉 + ワインソース */
var BeafWineSteakFactory = /** @class */ (function () {
    function BeafWineSteakFactory() {
    }
    BeafWineSteakFactory.prototype.getMeat = function () {
        return new Beaf();
    };
    BeafWineSteakFactory.prototype.getSauce = function () {
        return new WineSauce();
    };
    return BeafWineSteakFactory;
}());
/* 豚肉 + オニオンソース */
var PorkOnioinSteakFactory = /** @class */ (function () {
    function PorkOnioinSteakFactory() {
    }
    PorkOnioinSteakFactory.prototype.getMeat = function () {
        return new Pork();
    };
    PorkOnioinSteakFactory.prototype.getSauce = function () {
        return new OnionSauce();
    };
    return PorkOnioinSteakFactory;
}());
var Client = /** @class */ (function () {
    function Client(keyword) {
        var steak = new Steak();
        var factory = this.createFactory(keyword);
        steak.select_meat(factory.getMeat());
        steak.select_sauce(factory.getSauce());
        this.product = steak;
    }
    Client.prototype.createFactory = function (keyword) {
        if (keyword == "牛肉とワイン") {
            return new BeafWineSteakFactory();
        }
        else {
            return new PorkOnioinSteakFactory();
        }
    };
    return Client;
}());
var factory_steak_1 = new Client("牛肉とワイン");
console.log(factory_steak_1);
var factory_steak_2 = new Client("牛以外");
console.log(factory_steak_2);
