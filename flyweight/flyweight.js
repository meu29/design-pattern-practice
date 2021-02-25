/* tsc -t es5 flyweight.ts */
/* node flyweight.js */
/* フライフェイト */
var TShirt = /** @class */ (function () {
    function TShirt(size, picture_color) {
        this.size = size;
        this.picture_color = picture_color;
    }
    return TShirt;
}());
var randInt = function (min, max) {
    return min + Math.floor(Math.random() * ((max - min) + 1));
};
/* 同じ内容のインスタンス({ size: 'S', picture_color: true } など)が複数作成される */
for (var i = 0; i <= 30; i++) {
    var item = new TShirt(["S", "M", "L"][randInt(0, 2)], [true, false][randInt(0, 1)]);
    console.log(item);
}
/* シングルトンパターンで作成 */
var TShirtFactory = /** @class */ (function () {
    function TShirtFactory() {
        /* Map型は連想配列 Map<string, number> -> [["hoge", 1], ["huga", 2]] */
        /* キー「hoge」に対して値「1」を返す */
        /* {hoge: 1, huga: 2}の別の書き方? */
        //private _TShirtMap : Map<string, TShirt> = new Map<string, TShirt>();
        this._TShirtInstances = [];
    }
    Object.defineProperty(TShirtFactory, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new TShirtFactory();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    TShirtFactory.prototype.getTShirt = function (size, picture_color) {
        for (var i = 0; i <= this._TShirtInstances.length - 1; i++) {
            if (this._TShirtInstances[i].size == size && this._TShirtInstances[i].picture_color == picture_color) {
                return;
            }
        }
        this._TShirtInstances.push(new TShirt(size, picture_color));
    };
    TShirtFactory.prototype.getOrder = function () {
        console.log(this._TShirtInstances);
    };
    TShirtFactory._instance = null;
    return TShirtFactory;
}());
var factory = TShirtFactory.Instance;
for (var i = 0; i <= 30; i++) {
    factory.getTShirt(["S", "M", "L"][randInt(0, 2)], [true, false][randInt(0, 1)]);
}
factory.getOrder();
