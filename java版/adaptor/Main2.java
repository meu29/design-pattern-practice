package java版.adapter;

/* 委譲によるadapterパターン */

class Main2 {

    public static void main(String[] args) {
        /* 抽象クラスの型を変数の型に指定する */
        Print p = new PrintBanner("Hello");
        p.printWeak();
        p.printStrong();
    }

}

abstract class Print {    
    abstract void printWeak();
    abstract void printStrong();
}

class PrintBanner extends Print {

    Banner bannerIns;

    PrintBanner(String charItem) {
        /* 処理を行ってもらうクラスのインスタンスをメンバとして持つ */
        this.bannerIns = new Banner(charItem);
    }

    public void printWeak() {
        /* PrintBannerクラス自身で記号付き文字を出力するのではなく、Bannerクラスにやってもらう。(委譲) */
        /* 継承によるアダプターパターンとの違い -> 処理をやってもらうクラス(ここではBannerクラス)と親子関係を持たない */
        this.bannerIns.showWithPeren();
    }

    public void printStrong() {
        /* 上メソッドと同様 */
        this.bannerIns.showWithAster();
    }

}

class Banner {

    String charItem;

    Banner(String charItem) {
        this.charItem = charItem;
    }

    void showWithPeren() {
        System.out.println("(" + this.charItem + ")");
    }

    void showWithAster() {
        System.out.println("*" + this.charItem + "*");
    }

}