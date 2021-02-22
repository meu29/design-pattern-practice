/* テンプレートメソッドパターン */
/* tsc templatemethod.ts */
/* node templatemethod.js */

/* テンプレートクラス */
class WoodCutPrint {

    /* 各メソッドの引数とそれらの型、および戻り値の型だけ決める? */
    /* 具体的な処理手順は各クラスで再定義(オーバーロード)して決める? */
    draw(): void {}
    cut(): void {}
    print(): void {}

    createWoodCutPrint(): void {
        this.draw();
        this.cut();
        this.print();
    }

}

/* 親クラスで決めた内容は変えてはいけない(変えたらテンプレートの意味がない) */
class TanakaWoodCutPrint extends WoodCutPrint {

    draw(): void {
        console.log("ウサギの絵を書いた");
    }

    cut(): void {
        console.log("正方形にカットした");
    }

    print(): void {
        console.log("版画インクとバレンを使って豪快にプリントした");
    }

}

class YamashitaWoodCutPrint extends WoodCutPrint {

    draw(): void {
        console.log("ライオンの絵を書いた");
    }

    cut(): void {
        console.log("三角形にカットした");
    }

    print(): void {
        console.log("版画インクとプレスを使って薄めにプリントした");
    }

}

/* createWoodCutPrintメソッドはオーバーライドしていないので、親クラスのそれがそのまま実行される */
/* thisは各子クラスを指す */
var tanaka_hannga = new TanakaWoodCutPrint();
tanaka_hannga.createWoodCutPrint();
var yamashita_hannga = new YamashitaWoodCutPrint();
yamashita_hannga.createWoodCutPrint();