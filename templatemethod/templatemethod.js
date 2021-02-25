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
/* 抽象クラス */
var Money = /** @class */ (function () {
    function Money(value) {
        this.value = value;
    }
    Money.prototype.indicateValue = function () {
        return this.getPrefix() + this.value.toString() + this.getPostFix();
    };
    return Money;
}());
var Dollar = /** @class */ (function (_super) {
    __extends(Dollar, _super);
    /* 抽象クラスを継承した場合は必ずsuper() */
    /* 親クラスのコンストラクタを実行 */
    function Dollar(value) {
        return _super.call(this, value) || this;
    }
    /* テンプレートメソッドの流れ */
    /* 1. 親クラスで抽象メソッドを作成(メソッドのおおまかな枠組みを決める) */
    /* 2. 子クラスで抽象メソッドをオーバライド(具体的なメソッドの処理手順を決める) */
    Dollar.prototype.getPrefix = function () {
        return "$";
    };
    Dollar.prototype.getPostFix = function () {
        return "";
    };
    return Dollar;
}(Money));
var Yen = /** @class */ (function (_super) {
    __extends(Yen, _super);
    function Yen(value) {
        return _super.call(this, value) || this;
    }
    Yen.prototype.getPrefix = function () {
        return "";
    };
    Yen.prototype.getPostFix = function () {
        return "円";
    };
    return Yen;
}(Money));
var yen_1 = new Yen(100);
console.log(yen_1.indicateValue());
var dollar_1 = new Dollar(200);
console.log(dollar_1.indicateValue());
