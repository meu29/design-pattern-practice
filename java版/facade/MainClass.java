package java版.facade;

class MainClass {

    public static void main(String[] args) {

        /* facadeなし */
        new Key().getKey();
        new Locker().takeOut();
        new Pay().pay();

        /* facadeあり */
        new facadeClass().procedure();

    }

}

class Key {

    void getKey() {
        System.out.println("鍵を受け取る");
    }

}

class Locker {

    void takeOut() {
        System.out.println("荷物を取り出す");
    }

}

class Pay {

    void pay() {
        System.out.println("料金を支払う");
    }

}

/* 使用するクラスの順番が決まっているときに使う */
class facadeClass {

    void procedure() {
        new Key().getKey();
        new Locker().takeOut();
        new Pay().pay();
    }

}