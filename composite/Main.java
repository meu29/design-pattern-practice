package composite;

import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        Folder folder1 = new Folder("講義資料");
        folder1.addItem(new File("アクティビティ図.txt"));
        Folder folder2 = new Folder("演習");
        folder2.addItem(new File("演習問題"));
        folder2.addItem(new File("演習問題解答"));
        folder1.addItem(folder2);
        folder1.getNames();
    }
}

abstract class Entry {
    abstract void getNames();
}

/* 共通のインターフェースを実装することで、ファイルもフォルダも同じものとして扱う。 */
class File extends Entry {

    String name;

    File(String name) {
        this.name = name;
    }

    /* name(s)だがファイルなので自分の名前のみを表示する */
    public void getNames() {
        System.out.println(this.name);
    }

}

class Folder extends Entry {

    String name;
    ArrayList<Entry> items;

    Folder(String name) {
        this.name = name;
        this.items = new ArrayList<Entry>();
    }

    /* それがフォルダかファイルかを区別せずに加える */
    void addItem(Entry item) {
        this.items.add(item);
    }

    void getNames() {

        System.out.println(this.name);

        for (int i = 0; i <= this.items.size() - 1; i++) {
            this.items.get(i).getNames();
        }

    }

}