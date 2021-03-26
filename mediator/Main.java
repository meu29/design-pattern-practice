package mediator;

/* インスタンス間での相互作用(一方のメソッド実行によって他のインスタンスのメソッドが実行されたり、フィールドの値が変化するなど) */

class Main {
    public static void main(String[] args) {
        Mediator mediator = new Mediator();
        mediator.createItems();
        mediator.button.push();
        mediator.button.push();
        mediator.img.click();
        mediator.img.click();
    }
}

class Img {

    private boolean disp;
    private Mediator mediator;

    Img(Mediator mediator) {
        this.disp = false;
        this.mediator = mediator;
    }

    /* 画像がクリックされる -> Mediatorがボタンクラスの押されている/押されていないを切り替えるメソッドを実行 */
    void click() {
        this.disp = !this.disp;
        this.mediator.notifyButton(this.disp);
    }

    void switchDispState(boolean dispState) {
        this.disp = dispState;
        System.out.println("画像が表示されているか: " + String.valueOf(dispState));
    }

}

class Button {

    private boolean pushed;
    private Mediator mediator;

    Button(Mediator mediator) {
        this.pushed = false;
        this.mediator = mediator;
    }

    /* ボタンが押される -> Mediatorが画像クラスの表示/非表示を切り替えるメソッドを実行 */
    void push() {
        this.pushed = !this.pushed;
        this.mediator.notifyImg(this.pushed);
    }

    void switchPushState(boolean pushed) {
        this.pushed = pushed;
        System.out.println("ボタンが押されているか: " + String.valueOf(pushed));
    }

}

/* 相互作用の仲介者 */
class Mediator {

    Button button;
    Img img;

    void createItems() {
        this.button = new Button(this);
        this.img = new Img(this);
    }

    void notifyImg(boolean pushed) {
        this.img.switchDispState(pushed);
    }

    void notifyButton(boolean pushed) {
        this.button.switchPushState(pushed);
    }

}