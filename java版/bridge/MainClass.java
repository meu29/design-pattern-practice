package java版.bridge;

class MainClass {

    public static void main(String[] args) {
        new Display(new StringDisplayImp()).run();
        new ContinuousDisplay(new StringDisplayImp()).runMulti();
    }

}

/* クラス階層 -> 親子関係のこと */
/* 親クラスは具象クラスで、子クラスは親クラスが持つ基本的な機能(メソッド)と親クラスにはない新しい機能を持つ(新しい機能を追加する)関係 -> 機能のクラス階層 */
/* 親クラスが抽象クラスで、子クラスが親クラスの抽象メソッドの具体的な処理を持つ(オーバーライド)関係 -> 実装のクラス階層 */

/* 実装のクラス階層 */
abstract class DisplayImp {
    abstract void displayFrame();
    abstract void displayText();
}

/* 実装のクラス階層(DisplayImpクラスの抽象メソッドに具体的な処理を作っている) */
class StringDisplayImp extends DisplayImp {

    void displayFrame() {
        System.out.println("+----------------+");
    }

    void displayText() {
        System.out.println("|Hello, Universe.|");
    }

}

/* 機能のクラス階層 */
class Display {

    DisplayImp displayImp;

    /* 実装のクラス階層との橋渡し(Bridge) */
    Display(DisplayImp displayImp) {
        this.displayImp = displayImp;
    }

    void displayFrame() {
        this.displayImp.displayFrame();
    }

    void displayText() {
        this.displayImp.displayText();
    }

    void run() {
        this.displayFrame();
        this.displayText();
        this.displayFrame();
    }

}

/* 機能のクラス階層(Displayクラスを継承し新機能を作っている) */
class ContinuousDisplay extends Display {

    ContinuousDisplay(DisplayImp displayImp) {
        super(displayImp);
    }

    /* テキストを3回表示する という新機能 */
    void runMulti() {

        this.displayFrame();

        for (int i = 0; i <= 3; i++) {
            this.displayText();
        }

        this.displayFrame();

    }

}

