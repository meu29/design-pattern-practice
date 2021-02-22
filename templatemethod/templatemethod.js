/* テンプレートメソッドパターン */
/* tsc templatemethod.ts */
/* node templatemethod.js */
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
/* テンプレートクラス */
var WoodCutPrint = /** @class */ (function () {
    function WoodCutPrint() {
    }
    /* 各メソッドの引数とそれらの型、および戻り値の型だけ決める */
    /* 具体的な処理手順は各クラスで再定義(オーバーロード)して決める */
    WoodCutPrint.prototype.draw = function () { };
    WoodCutPrint.prototype.cut = function () { };
    WoodCutPrint.prototype.print = function () { };
    WoodCutPrint.prototype.createWoodCutPrint = function () {
        this.draw();
        this.cut();
        this.print();
    };
    return WoodCutPrint;
}());
/* 親クラスで決めた内容は変えてはいけない(変えたらテンプレートの意味がない) */
var TanakaWoodCutPrint = /** @class */ (function (_super) {
    __extends(TanakaWoodCutPrint, _super);
    function TanakaWoodCutPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TanakaWoodCutPrint.prototype.draw = function () {
        console.log("ウサギの絵を書いた");
    };
    TanakaWoodCutPrint.prototype.cut = function () {
        console.log("正方形にカットした");
    };
    TanakaWoodCutPrint.prototype.print = function () {
        console.log("版画インクとバレンを使って豪快にプリントした");
    };
    return TanakaWoodCutPrint;
}(WoodCutPrint));
var YamashitaWoodCutPrint = /** @class */ (function (_super) {
    __extends(YamashitaWoodCutPrint, _super);
    function YamashitaWoodCutPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YamashitaWoodCutPrint.prototype.draw = function () {
        console.log("ライオンの絵を書いた");
    };
    YamashitaWoodCutPrint.prototype.cut = function () {
        console.log("三角形にカットした");
    };
    YamashitaWoodCutPrint.prototype.print = function () {
        console.log("版画インクとプレスを使って薄めにプリントした");
    };
    return YamashitaWoodCutPrint;
}(WoodCutPrint));
var tanaka_hannga = new TanakaWoodCutPrint();
tanaka_hannga.createWoodCutPrint();
var yamashita_hannga = new YamashitaWoodCutPrint();
yamashita_hannga.createWoodCutPrint();
