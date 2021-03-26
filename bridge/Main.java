package bridge;

class Main {
    public static void main(String[] args) {

        DisplayImp imp1 = new CharDisplayImp("good bye");
        Display d1 = new Display(imp1);
        System.out.println("基本的な機能を実行");
        d1.dispFunction();
        DisplayFrame d2 = new DisplayFrame(imp1);
        System.out.println("新機能を実行");
        d2.dispWithStarFunction();

        DisplayImp imp2 = new NumberDisplayImp(100);
        Display d3 = new Display(imp2);
        System.out.println("基本的な機能を実行");
        d3.dispFunction();
        System.out.println("新機能を実行");
        DisplayFrame d4 = new DisplayFrame(imp2);
        d4.dispWithStarFunction();

    }
}

/* 機能のクラス階層 -> 親クラス(具象)を子クラスが継承し、子クラスは親クラスにない新しい機能(メソッド)を持つという関係。 */
/* 機能クラス階層の上位クラス(基本的な機能) */
class Display {

    /* 実装クラス階層の上位クラスのインスタンスをフィールドに持つ(機能のクラス階層と実装のクラス階層との橋渡し) */
    DisplayImp displayImp;

    Display(DisplayImp displayImp) {
        this.displayImp = displayImp;
    } 

    /* 基本的な機能 具体的な内容は実装クラス階層のクラスに別のメソッドとして書き、ここではそれの呼び出しだけを行う。 */
    /* 使用する実装クラス階層のクラスが異なれば基本的な機能も変化する */
    void dispFunction() {
        this.displayImp.disp();
    }

}

/* 機能クラス階層の下位クラス 上位クラスの基本的な機能 + 下位クラスで追加される新機能 */
class DisplayFrame extends Display {

    DisplayFrame(DisplayImp displayImp) {
        super(displayImp);
    }

    /* 新機能 基本的な機能とは違い具体的な内容を直接書く */
    void dispWithStarFunction() {
        System.out.println("☆☆☆☆☆☆☆☆");
        this.displayImp.disp();
        System.out.println("☆☆☆☆☆☆☆☆");
    }

}


/* 機能のクラス階層 -> 親クラス(抽象)を子クラスが継承し、子クラスは親クラスの抽象メソッドを実装(オーバーライド・中身を書く)するという関係。 */
/* 実装クラス階層の上位クラス */
abstract class DisplayImp {
    /* 機能クラス階層の上位クラスが持つ、基本的な機能を抽象メソッドとして定義。 */
    abstract void disp();
}

/* 実装のクラス階層の下位クラス */
class CharDisplayImp extends DisplayImp {

    String message;

    CharDisplayImp(String message) {
        this.message = message;
    }

    /* 機能クラス階層の上位クラスが持つ、基本的な機能の具体的な内容を書く。*/
    void disp() {
        System.out.println(this.message);
    }

}

/* 実装のクラス階層の下位クラス2  */
class NumberDisplayImp extends DisplayImp {

    int count;

    NumberDisplayImp(int count) {
        this.count = count;
    }

    void disp() {

        String hashRows = "";

        for (int i = 0; i <= this.count - 1; i++) {
            hashRows += "#";
        }

        System.out.println(hashRows);
    
    }

}
