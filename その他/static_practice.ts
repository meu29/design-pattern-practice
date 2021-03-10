class StaticClass {

    val: number = 1;
    static static_val: number = 2;

    static staticMethod(): void {

        console.log("このメソッドはインスタンスを作成せずに実行されました");

        /* sataticメソッドからはプロパティを参照できない */
        /* Property 'val' does not exist on type 'typeof StaticClass' */
        //console.log(this.val);

        /* staticプロパティなら参照できる */
        console.log(this.static_val);

    }


}

StaticClass.staticMethod();