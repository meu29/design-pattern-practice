package java版.chain_of_responsibility;

class MainClass {

    public static void main(String[] args) {
        new Handler1().doIt(9);
        new Handler1().doIt(19);
        new Handler1().doIt(29);
        new Handler1().doIt(30);
    }

}

abstract class Handler {
    abstract void doIt(int num); 
}

class Handler1 extends Handler {

    Handler nextHandler = new Handler2();

    void doIt(int num) {
        if (num < 10) {
            System.out.println("すばらしい");
        } else {
            this.nextHandler.doIt(num);
        }
    }

}

class Handler2 extends Handler {

    Handler nextHandler = new Handler3();

    void doIt(int num) {
        if (num < 20) {
            System.out.println("ふつう");
        } else {
            this.nextHandler.doIt(num);
        }
    }

}

class Handler3 extends Handler {

    void doIt(int num) {
        if (num < 30) {
            System.out.println("びみょう");
        } else {
            System.out.println("ダメ");
        }
    }

}