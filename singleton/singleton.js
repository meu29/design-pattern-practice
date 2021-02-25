/* tsc -t es5 singleton.ts */
/* node singleton.js */
/* シングルトンパターン */
var Sample = /** @class */ (function () {
    function Sample() {
    }
    Object.defineProperty(Sample, "Instance", {
        get: function () {
            /* 1度しかインスタンスを作成できなくする(同じインスタンスを使い回させる) */
            /* コンストラクタには書かない */
            if (!this._instance) {
                /* 自身(Sampleクラス)のインスタンスをメンバとして設定 */
                this._instance = new Sample();
                console.log("インスンタスを作成しました");
            }
            else {
                console.log("インスタンスが既に存在します");
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Sample;
}());
for (var i = 0; i <= 1; i++) {
    /* メソッド呼び出しだが()は不要 */
    Sample.Instance;
}
