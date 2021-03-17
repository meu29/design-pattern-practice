package java版.memento;

import java.util.Date;

class MainClass {

    public static void main(String[] args) {

        File file = new File("hoge.txt");
        Memento memento = file.createMemento(file.name);
        file.changeName("huga.txt");
        System.out.println(file.name);
        file.rollbackByMement(memento);
        System.out.println(file.name);

    }

}

class File {

    String name;

    File(String name) {
        this.name = name;
    }

    void changeName(String newName) {
        this.name = newName;
    }

    Memento createMemento(String name) {
        return new Memento(name);
    }

    /* mementoから初期状態を復元 */
    void rollbackByMement(Memento memento) {
        this.name = memento.name;
    }

}

class Memento {

    String name;

    Memento(String name) {
        this.name = name;
    }

}