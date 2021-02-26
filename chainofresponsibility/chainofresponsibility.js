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
var PayMethod = /** @class */ (function () {
    function PayMethod(name, blance) {
        this.name = name;
        this.blance = blance;
    }
    PayMethod.prototype.checkAmount = function (amount) {
        return this.blance >= amount;
    };
    PayMethod.prototype.setNextPayMethod = function (payMethod) {
        this.successor = payMethod;
    };
    PayMethod.prototype.pay = function (amount) {
        if (this.checkAmount(amount) == true) {
            console.log(this.name + "で" + amount.toString() + "円が決済されました。");
        }
        else {
            if (this.successor == undefined) {
                console.log(this.name + "の残高が不足しています。別の決済方法を登録してください。");
            }
            else {
                console.log(this.name + "の残高が不足しているため、別の支払い方法で決済されます。");
                this.successor.pay(amount);
            }
        }
    };
    return PayMethod;
}());
var BankTransfer = /** @class */ (function (_super) {
    __extends(BankTransfer, _super);
    function BankTransfer(name, blance) {
        return _super.call(this, name, blance) || this;
    }
    return BankTransfer;
}(PayMethod));
var CreditCardPay = /** @class */ (function (_super) {
    __extends(CreditCardPay, _super);
    function CreditCardPay(name, blance) {
        return _super.call(this, name, blance) || this;
    }
    return CreditCardPay;
}(PayMethod));
var SuicaPay = /** @class */ (function (_super) {
    __extends(SuicaPay, _super);
    function SuicaPay(name, blance) {
        return _super.call(this, name, blance) || this;
    }
    return SuicaPay;
}(PayMethod));
var bySuica = new SuicaPay("モバイルスイカ", 3000);
var byBank = new BankTransfer("銀行振込", 9000);
var byCreditCard = new CreditCardPay("クレジットカード", 10000);
bySuica.setNextPayMethod(byBank);
byBank.setNextPayMethod(byCreditCard);
console.log("商品1");
bySuica.pay(8000);
console.log("商品2");
bySuica.pay(19500);
