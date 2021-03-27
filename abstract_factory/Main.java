package abstract_factory;

class Main {
    public static void main(String[] args) {

        Factory f1 = Factory.getFactory("android");
        Phone p1 = f1.createPhone();
        p1.call();
        Tablet t1 = f1.createTablet();
        t1.draw();
        
        Factory f2 = Factory.getFactory("ios");
        Phone p2 = f2.createPhone();
        p2.call();
        Tablet t2 = f2.createTablet();
        t2.draw();

    }
}

/* 抽象的な工場 */
abstract class Factory {

    /* クライアントが具体的な工場を選択するメソッド */
    static Factory getFactory(String name) {
        if (name == "android") {
            return new AndroidFactory();
        } else {
            return new IosFactory();
        }
    }

    /* 製品を作る抽象メソッド メソッド名は工場間で統一 */
    abstract Phone createPhone();
    abstract Tablet createTablet();

}

/* 具体的な工場1 */
class AndroidFactory extends Factory {

    public Phone createPhone() {
        return new Xperia();
    }

    public Tablet createTablet() {
        return new MediaPad();
    }

}

/* 具体的な工場2 */
class IosFactory extends Factory {

    Phone createPhone() {
        return new Iphone();
    }

    Tablet createTablet() {
        return new Ipad();
    }

}

/* 抽象的な製品1 */
abstract class Phone {
    abstract void call();
}

/* 抽象的な製品2 */
abstract class Tablet {
    abstract void draw();
}

/* android工場で生産させる具体的な製品1 */
class Xperia extends Phone {

    void call() {
        System.out.println("Skype for Android");
    }

}

/* android工場で生産させる具体的な製品2 */
class MediaPad extends Tablet {

    void draw() {
        System.out.println("クリスタ for Android");
    }

}

/* ios工場で生産させる具体的な製品1 */
class Iphone extends Phone {

    void call() {
        System.out.println("Skype for IOS");
    }

}

/* ios工場で生産させる具体的な製品2 */
class Ipad extends Tablet {

    void draw() {
        System.out.println("クリスタ for IOS");
    }

}