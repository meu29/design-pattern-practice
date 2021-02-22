/* ファクトリーメソッド */
/* tsc factorymethod.ts */
/* node factorymethod.js */
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
var Wood = /** @class */ (function () {
    function Wood() {
        this.name = "木板";
    }
    return Wood;
}());
var Rubber = /** @class */ (function () {
    function Rubber() {
        this.name = "ゴム板";
    }
    return Rubber;
}());
var CutPrint = /** @class */ (function () {
    function CutPrint() {
    }
    CutPrint.prototype.draw = function () { };
    CutPrint.prototype.cut = function (h) { };
    CutPrint.prototype.print = function () { };
    /* typeof new Wood() => object */
    CutPrint.prototype.createCuttable = function () {
        return new Wood();
    };
    CutPrint.prototype.createCutPrint = function () {
        /* hanzai -> 版材 */
        var hanzai = this.createCuttable();
        console.log(hanzai);
        this.draw();
        this.cut(hanzai.name);
        this.print();
    };
    return CutPrint;
}());
var YamashitaCutPrint = /** @class */ (function (_super) {
    __extends(YamashitaCutPrint, _super);
    function YamashitaCutPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YamashitaCutPrint.prototype.draw = function () {
        console.log("ライオンの絵を書いた");
    };
    YamashitaCutPrint.prototype.cut = function (h) {
        console.log(h + "を三角形にカットした");
    };
    YamashitaCutPrint.prototype.print = function () {
        console.log("版画インクとプレスを使って薄めにプリントした");
    };
    return YamashitaCutPrint;
}(CutPrint));
var TakahashiCutPrint = /** @class */ (function (_super) {
    __extends(TakahashiCutPrint, _super);
    function TakahashiCutPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TakahashiCutPrint.prototype.createCuttable = function () {
        return new Rubber();
    };
    TakahashiCutPrint.prototype.draw = function () {
        console.log("風景画を書いた");
    };
    TakahashiCutPrint.prototype.cut = function (h) {
        console.log(h + "を五角形にカットした");
    };
    TakahashiCutPrint.prototype.print = function () {
        console.log("水彩絵の具とプレスを使って薄めにプリントした");
    };
    return TakahashiCutPrint;
}(CutPrint));
var yamashita_work = new YamashitaCutPrint();
yamashita_work.createCutPrint();
var takahashi_work = new TakahashiCutPrint();
takahashi_work.createCutPrint();
