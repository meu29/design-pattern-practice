/* tsc -t es5 flyweight.ts */
/* node flyweight.js */

/* フライフェイト */

class TShirt　{

    size: string; /* S M X */
    picture_color: boolean; /* モノクロorカラー */

    constructor(size: string, picture_color: boolean) {
        this.size = size;
        this.picture_color = picture_color;
    }

}

var randInt = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * ((max - min) + 1));
}

/* 同じ内容のインスタンス({ size: 'S', picture_color: true } など)が複数作成される これをなくしたい */
for (var i = 0; i <= 30; i++) {
    var item: TShirt = new TShirt(["S", "M", "L"][randInt(0, 2)], [true, false][randInt(0, 1)]);
    console.log(item);
}


/* シングルトンパターンで作成 */
class TShirtFactory {

    private static _instance: TShirtFactory = null;
    /* Map型は連想配列 Map<string, number> -> [["hoge", 1], ["huga", 2]] */
    /* キー「hoge」に対して値「1」を返す */
    /* {hoge: 1, huga: 2}の別の書き方? */
    //private _TShirtMap : Map<string, TShirt> = new Map<string, TShirt>();
    private _TShirtInstances: Array<TShirt> = [];

    static get Instance() {

        if (this._instance == null) {
            this._instance = new TShirtFactory();
        }

        return this._instance;

    }

    getTShirt(size: string, picture_color: boolean): void {

        for (var i = 0; i <= this._TShirtInstances.length - 1; i++) {
            if (this._TShirtInstances[i].size == size && this._TShirtInstances[i].picture_color == picture_color) {
                return;
            }
        }

        this._TShirtInstances.push(new TShirt(size, picture_color));

    }

    getOrder(): void {
        console.log(this._TShirtInstances);
    }

}

var factory: TShirtFactory = TShirtFactory.Instance;

for (var i = 0; i <= 30; i++) {
    factory.getTShirt(["S", "M", "L"][randInt(0, 2)], [true, false][randInt(0, 1)]);
}

/* 同じ内容のインスタンスが存在しないようにできた */
factory.getOrder();

