/* アダプターパターン */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Banner = /** @class */ (function () {
    function Banner(char) {
        this.char = char;
    }
    Banner.prototype.indicateWithParen = function () {
        console.log("(" + this.char + ")");
    };
    Banner.prototype.indicateWithAster = function () {
        console.log("*" + this.char + "*");
    };
    return Banner;
}());
var PrintBanner = /** @class */ (function (_super) {
    __extends(PrintBanner, _super);
    function PrintBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrintBanner.prototype.printWithParen = function () {
        this.indicateWithParen();
    };
    PrintBanner.prototype.printWithAster = function () {
        this.indicateWithAster();
    };
    return PrintBanner;
}(Banner));
var p = new PrintBanner("hello");
p.printWithParen();
p.printWithAster();
