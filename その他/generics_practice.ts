/* 引数をそのまま返す関数2つ(引数の型がnumber用とstring用) */

var test = (arg: number): number => {
    return arg;
}

var test2 = (arg: string): string => {
    return arg;
}

console.log(test(1));
console.log(test2("あああ"));

/* generic(型引数)を使用 */
/* 型の大文字に決まりはない */
var test_by_generics = <T>(arg: T): T => {
    return arg;
}

/* 一つの関数で異なる型を扱える */
/* Tにnumberを代入 */
console.log(test_by_generics<number>(1));
/* Tにstringを代入 */
console.log(test_by_generics<string>("あああ"));

class GenericClass<A, B> {

    old_item: A;
    new_item: B;

    constructor(old_item: A, new_item: B) {
        this.old_item = old_item;
        this.new_item = new_item;
    }

    getOldItem(): A {
        return this.old_item;
    }

    getNewItem(): B {
        return this.new_item;
    }

}

var genericClass_instance: GenericClass<number, string> = new GenericClass(1, "あああ");
/* getOldItem()でnumber型の値を返すようになる */
console.log(genericClass_instance.getOldItem());
/* getNewItem()でstring型の値を返すようになる */
console.log(genericClass_instance.getNewItem());

var genericClass_instance2: GenericClass<string, number> = new GenericClass("いいい", 2);
/* getOldItem()でstring型の値を返すようになる */
console.log(genericClass_instance2.getOldItem());
/* getNewItem()でnumber型の値を返すようになる */
console.log(genericClass_instance2.getNewItem());