/* デコレータ */
/* 既存のクラスを変更することなく機能を拡張 */
var BananaIcecream = /** @class */ (function () {
    function BananaIcecream() {
    }
    BananaIcecream.prototype.howSweet = function () {
        return "バナナ味";
    };
    BananaIcecream.prototype.howPrice = function () {
        return 300;
    };
    return BananaIcecream;
}());
var AppleIcecream = /** @class */ (function () {
    function AppleIcecream() {
    }
    AppleIcecream.prototype.howSweet = function () {
        return "りんご味";
    };
    AppleIcecream.prototype.howPrice = function () {
        return 260;
    };
    return AppleIcecream;
}());
/* 素のアイスクリームのクラスBananaIcecream, AppleIcecream)を継承しないのがポイント */
var IcecreamWithCookieTopping = /** @class */ (function () {
    function IcecreamWithCookieTopping(icecream) {
        this.icecream = icecream;
    }
    IcecreamWithCookieTopping.prototype.howSweet = function () {
        return this.icecream.howSweet() + "とクッキーのトッピング";
    };
    IcecreamWithCookieTopping.prototype.howPrice = function () {
        return this.icecream.howPrice() + 120;
    };
    return IcecreamWithCookieTopping;
}());
var IcecreamWithMarshmallowTopping = /** @class */ (function () {
    function IcecreamWithMarshmallowTopping(icecream) {
        this.icecream = icecream;
    }
    IcecreamWithMarshmallowTopping.prototype.howSweet = function () {
        return this.icecream.howSweet() + "とマシュマロのトッピング";
    };
    IcecreamWithMarshmallowTopping.prototype.howPrice = function () {
        return this.icecream.howPrice() + 170;
    };
    return IcecreamWithMarshmallowTopping;
}());
var c = new IcecreamWithCookieTopping(new BananaIcecream());
console.log(c.howSweet());
console.log(c.howPrice());
var m = new IcecreamWithMarshmallowTopping(new AppleIcecream());
console.log(m.howSweet());
console.log(m.howPrice());
var c2 = new IcecreamWithCookieTopping(new AppleIcecream());
console.log(c2.howSweet());
console.log(c2.howPrice());
var m2 = new IcecreamWithMarshmallowTopping(new BananaIcecream());
console.log(m2.howSweet());
console.log(m2.howPrice());
