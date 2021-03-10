/* 引数をそのまま返す関数2つ(引数の型がnumber用とstring用) */
var test = function (arg) {
    return arg;
};
var test2 = function (arg) {
    return arg;
};
console.log(test(1));
console.log(test2("あああ"));
/* genericを使用 */
/* 型の大文字に決まりはない */
var test_by_generics = function (arg) {
    return arg;
};
/* 一つの関数で異なる型を扱える */
/* Tにnumberを代入 */
console.log(test_by_generics(1));
/* Tにstringを代入 */
console.log(test_by_generics("あああ"));
var GenericClass = /** @class */ (function () {
    function GenericClass(old_item, new_item) {
        this.old_item = old_item;
        this.new_item = new_item;
    }
    GenericClass.prototype.getOldItem = function () {
        return this.old_item;
    };
    GenericClass.prototype.getNewItem = function () {
        return this.new_item;
    };
    return GenericClass;
}());
var genericClass_instance = new GenericClass(1, "あああ");
/* getOldItem()でnumber型の値を返すようになる */
console.log(genericClass_instance.getOldItem());
/* getNewItem()でstring型の値を返すようになる */
console.log(genericClass_instance.getNewItem());
var genericClass_instance2 = new GenericClass("いいい", 2);
/* getOldItem()でstring型の値を返すようになる */
console.log(genericClass_instance2.getOldItem());
/* getNewItem()でnumber型の値を返すようになる */
console.log(genericClass_instance2.getNewItem());
