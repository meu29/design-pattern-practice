var StaticClass = /** @class */ (function () {
    function StaticClass() {
        this.val = 1;
    }
    StaticClass.staticMethod = function () {
        console.log("このメソッドはインスタンスを作成せずに実行されました");
        /* sataticメソッドからはプロパティを参照できない */
        /* Property 'val' does not exist on type 'typeof StaticClass' */
        //console.log(this.val);
        /* staticプロパティは参照できる */
        console.log(this.static_val);
    };
    StaticClass.static_val = 2;
    return StaticClass;
}());
StaticClass.staticMethod();
