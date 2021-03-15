package java版.singleton;

import java.util.Random;

public class MainClass {

    public static void main(String[] args) {

        System.out.println("シングルトンなし");

        /* 3回インスタンスを作成(=3回乱数を作成) */
        for (int i = 0; i <= 2; i++) {
            System.out.println(new NoSingletonClass().randnum);
        }

        System.out.println("シングルトンあり");

        /* 1度だけインスタンスを作成(=1回だけ乱数を作成) */
        for (int i = 0; i <= 2; i++) {
            SingletonClass singletonClassInstance = SingletonClass.getInstance();
            System.out.println(singletonClassInstance.randnum);
        }

    }

}

class NoSingletonClass {

    int randnum;

    NoSingletonClass() {
        this.randnum = new Random().nextInt();
    }

}

class SingletonClass {

    /* 自身のインスタンスをメンバに持つ */
    static SingletonClass myInstance = null;
    int randnum;

    /* 自クラス内でしかコンストラクタを使用できない(new クラス名)ようにする */
    private SingletonClass(int randnum) {
        this.randnum = randnum;
    }

    /* 1つのインスタンスを使い回す */
    static SingletonClass getInstance() {

        /* staticメンバはthis不要 */
        if (myInstance == null) {
            myInstance = new SingletonClass(new Random().nextInt());
        }

        return myInstance;

    }

}
