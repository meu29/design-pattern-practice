/* アクセッサ */
/* tsc -t es5 accessor.ts */
/* node accessor.js */

class Counter {

    _count: number;

    constructor() {
        this._count = 0;
    }

    /* ゲッター プロパティを見る用 */
    get count(): number {
        return this._count;
    }
    
    /* セッター プロパティを更新する用 引数必須 */
    /* 返り値を持たない :voidを付けるのもダメ */
    set count(num_of_press: number) {
        this._count += num_of_press;
    }

}

var counter = new Counter();
/* set count()が実行される */
counter.count = 3;
/* get count()が実行される */
var now_count = counter.count
console.log(now_count);