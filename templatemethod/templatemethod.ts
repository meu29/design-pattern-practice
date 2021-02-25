/* テンプレートメソッドパターン */

/* 抽象クラス */
abstract class Money {

    value: number;

    constructor(value: number) {
        this.value = value;
    }

    /* 抽象メソッドは引数と戻り値およびそれらの型のみ記載し、処理({})は記載しない。 */
    abstract getPrefix(): string;
    abstract getPostFix(): string;

    indicateValue(): string {
        return this.getPrefix() + this.value.toString() + this.getPostFix();
    }

}

class Dollar extends Money {

    /* 抽象クラスを継承した場合は必ずsuper() */
    /* 親クラスのコンストラクタを実行 */
    constructor(value: number) {
        super(value);
    }

    /* テンプレートメソッドの流れ */
    /* 1. 親クラスで抽象メソッドを作成(メソッドのおおまかな枠組みを決める) */
    /* 2. 子クラスで抽象メソッドをオーバライド(具体的なメソッドの処理手順を決める) */
    getPrefix(): string {
        return "$";
    }

    getPostFix(): string {
        return "";
    }

}

class Yen extends Money {

    constructor(value: number) {
        super(value);
    }

    getPrefix(): string {
        return "";
    }

    getPostFix(): string {
        return "円";
    }

}

var yen_1 = new Yen(100);
console.log(yen_1.indicateValue());
var dollar_1 = new Dollar(200);
console.log(dollar_1.indicateValue());