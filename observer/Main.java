package observer;

import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        Counter counter = new Counter();
        counter.addObserver(new DigetObserver());
        counter.addObserver(new ChartObserver());

        for (int i = 0; i <= 7; i++) {
            counter.addCount();
        }

    }
}

interface Observer {
    void update(int count);
}

class Counter {

    ArrayList<Observer> observers = new ArrayList<Observer>();
    int count;

    Counter() {
        this.count = 0;
    }

    void addObserver(Observer observer) {
        observers.add(observer);
    }

    void addCount() {
        this.count += 1;
        this.notifyObserver();
    }

    void notifyObserver() {

        /* 全てのオブサーバーに通知(各オブサーバーのメソッドを呼び出す) */
        for (int i = 0; i <= observers.size() - 1; i++) {
            observers.get(i).update(this.count);
        }

    }

}

class DigetObserver implements Observer {

    public void update(int count) {
        System.out.println(count);
    }

}

class ChartObserver implements Observer {

    public void update(int count) {

        String charItem = "";

        for (int i = 0; i <= count - 1; i++) {
            charItem +=  "*";
        }

        System.out.println(charItem);

    }

}