/* ファクトリーメソッド */
/* tsc factorymethod.ts */
/* node factorymethod.js */

class Wood {
    name: string = "木板";
}

class Rubber {
    name: string = "ゴム板";
}

class CutPrint {

    draw(): void {}
    cut(h: string): void {}
    print(): void {}

    /* typeof new Wood() => objectだが返り値の型にobjectを設定するとエラー */
    /* デフォルトではWoodクラスのインスタンスを返し、子クラスはオーバーライドによってRubberクラスのインスタンスを代わりに使う。 */
    createCuttable() {
        return new Wood();
    }

    createCutPrint(): void {
        /* hanzai -> 版材 */
        var hanzai = this.createCuttable();
        this.draw();
        this.cut(hanzai.name);
        this.print();
    }

}

class YamashitaCutPrint extends CutPrint {

    draw(): void {
        console.log("ライオンの絵を書いた");
    }

    cut(h: string): void {
        console.log(h + "を三角形にカットした");
    }

    print(): void {
        console.log("版画インクとプレスを使って薄めにプリントした");
    }

}

class TakahashiCutPrint extends CutPrint {

    /* createCuttableメソッドをオーバーライド */
    createCuttable() {
        return new Rubber();
    }

    draw(): void {
        console.log("風景画を書いた");
    }

    cut(h: string): void {
        console.log(h + "を五角形にカットした");
    }

    print(): void {
        console.log("水彩絵の具とプレスを使って薄めにプリントした");
    }    

}

var yamashita_work = new YamashitaCutPrint();
yamashita_work.createCutPrint();
var takahashi_work = new TakahashiCutPrint();
takahashi_work.createCutPrint();