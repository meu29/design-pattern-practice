/* アクセッサ */
/* tsc -t es5 accessor.ts */
/* node accessor.js */
var Counter = /** @class */ (function () {
    function Counter() {
        this._count = 0;
    }
    Object.defineProperty(Counter.prototype, "count", {
        /* ゲッター プロパティを見る用 */
        get: function () {
            return this._count;
        },
        /* セッター プロパティを更新する用 引数必須 */
        /* 返り値を持たない :voidを付けるのもダメ */
        set: function (num_of_press) {
            this._count += num_of_press;
        },
        enumerable: false,
        configurable: true
    });
    return Counter;
}());
var counter = new Counter();
/* set count()が実行される */
counter.count = 3;
/* get count()が実行される */
var now_count = counter.count;
console.log(now_count);
