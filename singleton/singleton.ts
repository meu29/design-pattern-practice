/* tsc -t es5 singleton.ts */
/* node singleton.js */

/* シングルトンパターン */

class Sample {

    /* インスンタンスを格納する変数の型はクラス名? */
    private static _instance: Sample;

    static get Instance() {

        /* 1度しかインスタンスを作成できなくする(同じインスタンスを使い回させる) */
        /* コンストラクタには書かない */
        if (!this._instance) {
            /* 自身(Sampleクラス)のインスタンスをメンバとして設定 */
            this._instance = new Sample();
            console.log("インスンタスを作成しました");
        } else {
            console.log("インスタンスが既に存在します");
        }

        return this._instance;
    }
}

for (var i = 0; i <= 1; i++) {
    /* メソッド呼び出しだが()は不要 */
    Sample.Instance;
}