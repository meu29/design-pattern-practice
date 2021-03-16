package java版.decorator;

class MainClass {

    public static void main(String[] args) {

        /* 拡張前 */
        User user = new NormalUser();
        User user2 = new PremiumUser();
        System.out.println(user.play());
        System.out.println(user2.play());

        /* 拡張後 */
        User decoratedUser = new Decorator(user);
        User decoratedUser2 = new Decorator(user2);
        System.out.println(decoratedUser.play());
        System.out.println(decoratedUser2.play());

    } 

}

interface User {
    String play();
}

class NormalUser implements User {

    public String play() {
        return "ランダムな音楽を再生します";
    }

}

class PremiumUser implements User {

    public String play() {
        return "再生リストの音楽を再生します";
    }

}

/* Userインターフェースと、2つのxxUserクラスを書き換えることなく機能を拡張(リピート再生機能) */
/* デコレータクラスは必ず拡張したいメソッドを持つクラスと同じインターフェースを実装 */
class Decorator implements User {

    User userInstance;

    Decorator(User userInstance) {
        this.userInstance = userInstance;
    }

    /* 機能の拡張 */
    public String play() {
        return this.userInstance.play() + " リピート: ON";
    }

}