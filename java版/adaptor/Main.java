package java版.adapter;

/* 継承によるadapterパターン */

class Main {

    public static void main(String[] args) {

        /* adapterパターンでは、変数の型に必ずインターフェースの型を指定する。 */
        PrintInterface p = new PrintBanner("hello");
        p.printWeak();
        p.printStrong();

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

interface PrintInterface {
    abstract void printWeak();
    abstract void printStrong();
}

class PrintBanner extends Banner implements PrintInterface {

    PrintBanner(String charItem) {
        super(charItem);
    }

    public void printWeak() {
        /* PrintBannerには記号付き文字を出力するメソッドをあえて持たせない。(PrintBannerクラスの中で直接println(charItem)をしない) */
        /* 余計なクラス(ここではBannerクラス)一つを作成し、そこに記号付き文字を出力するメソッドを書く。それを継承した上で継承元の記号付き文字を出力するメソッドを呼び出すメソッドを書く。 */
        this.showWithPeren();
    }

    public void printStrong() {
        /* 上メソッドと同様 */
        this.showWithAster();
    }

}