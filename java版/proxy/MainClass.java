package java版.proxy;

class MainClass {

    public static void main(String[] args) {

        Proxy proxy = new Proxy();
        proxy.playMusicsWithCm(new Player());

    }

}

class Player {

    void play() {
        System.out.println("音楽を再生します");
    }

}

/* 別クラスのインスタンスが処理を行ったとき、自分も何か処理を行うクラス */
class Proxy {

    /* 処理を検知したいインスタンスを引数にする */
    void playMusicsWithCm(Player player) {

        for (int i = 0; i <= 3; i++) {
            player.play();
            System.out.println("CMを再生します");
        }

    }

}