class PayMethod {

    name: string;
    /* 残高 */
    blance: number;
    successor: PayMethod;

    constructor(name: string, blance: number) {
        this.name = name;
        this.blance = blance;
    }

    checkAmount(amount: number): boolean {
        return this.blance >= amount;
    }

    /* 次の決済方法を設定 */
    setNextPayMethod(payMethod: PayMethod): void {
        this.successor = payMethod;
    }

    pay(amount: number): void {
        if (this.checkAmount(amount) == true) {
            console.log(this.name + "で" + amount.toString() + "円が決済されました。");
        } else {
            if (this.successor == undefined) {
                console.log(this.name + "の残高が不足しています。別の決済方法を登録してください。");
            } else {
                console.log(this.name + "の残高が不足しているため、別の支払い方法で決済されます。");
                this.successor.pay(amount);
            }
        }
    }

}

class BankTransfer extends PayMethod {

    constructor(name: string, blance: number) {
        super(name, blance);
    }

}

class CreditCardPay extends PayMethod {

    constructor(name: string, blance: number) {
        super(name, blance);
    }

}

class SuicaPay extends PayMethod {

    constructor(name: string, blance: number) {
        super(name, blance);
    }

}

var bySuica = new SuicaPay("モバイルスイカ", 3000);
var byBank = new BankTransfer("銀行振込", 9000);
var byCreditCard = new CreditCardPay("クレジットカード", 10000);

/* スイカ -> 銀行 -> クレジットカードの順に残高を確認 */
/* スイカの残高が足りている -> 銀行振込とクレジットカードの残高は確認しない */
/* クレジットカードの残高が足りなかった場合はsetNextPayMethod()を実行しないのでsuccessorはundefiendになる */
bySuica.setNextPayMethod(byBank);
byBank.setNextPayMethod(byCreditCard);

console.log("商品1");
bySuica.pay(8000);
console.log("商品2");
bySuica.pay(19500);