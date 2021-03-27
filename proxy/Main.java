package proxy;

import java.util.ArrayList;

class Main {
    public static void main(String[] args) {

        PrinterProxy pp = new PrinterProxy();
        pp.print("tanaka");
        ArrayList<String> arr = new ArrayList<String>();
        arr.add("tanaka");
        arr.add("yamashita");
        arr.add("motohashi");
        pp.printAll(arr);

        Printer p = new Printer();
        p.print("tanaka");
        p.printAll(arr);

    }
}

interface PrinterInterface {
    void print(String charItem);
    void printAll(ArrayList<String> charItemArray);
}

/* プロキシに代理をしてもらうクラス */
class Printer implements PrinterInterface {

    /* 軽い処理(と仮定する) 軽い処理はプロキシに任せる */
    /* プロキシに代理してもらう処理と全く同じ内容をここにも書く(Printerを直接使っても同じ結果を返せるようにするため => 透過的) */
    /* プロキシを使う場合は呼び出されることはない */
    public void print(String charItem) {
        System.out.println(charItem);
    }

    /* 重い処理(と仮定する) 重い処理は自分でやる */
    public void printAll(ArrayList<String> charItemArray) {
        for (int i = 0; i <= charItemArray.size() - 1; i++) {
            System.out.println(String.valueOf(i + 1) + ". " + charItemArray.get(i));
        }
    }

}

/* プロキシ(代理人)クラス 代理を依頼してきたクラスと同じインターフェースを実装する */
class PrinterProxy implements PrinterInterface {

    Printer printer = null;

    /* 軽い処理なので代理をつとめる */
    public void print(String charItem) {
        System.out.println(charItem);
    }

    /* 重い処理なので依頼者に丸投げ */
    public void printAll(ArrayList<String> charItemArray) {

        /* 代理人と依頼者は1:1 */
        if (this.printer == null) {
            this.printer = new Printer();
        }

        this.printer.printAll(charItemArray);
        
    }

}