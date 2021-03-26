package decorator;

/* 文字を記号で装飾する */

class Main {
    public static void main(String[] args) {
        Item item = new Frame(new Star(new Text("Hello")));
        item.displayPublic();
        Item item2 = new Frame(new Star(new Frame(new Star(new Text("Good bye")))));
        item2.displayPublic();
    }
}

abstract class Item {
    abstract String display();
    void displayPublic() {
        System.out.println(this.display());
    }
}

/* 装飾対象 他のインスタンスを装飾しない */
class Text extends Item {

    String text;

    Text(String text) {
        this.text = text;
    }

    String display() {
        return this.text;
    }

}

/* 装飾対象を装飾するクラス 自身を他のインスタンス(自クラス・他クラス)で装飾することもできる */
class Star extends Item {

    /* 装飾する対象のインスタンスをフィールドに持つ */
    Item item;

    Star(Item item) {
        this.item = item;
    }

    String display() {
        return "☆☆☆" + this.item.display() + "☆☆☆";
    }

}

/* 装飾対象を装飾するクラス2 */
class Frame extends Item {

    Item item;

    Frame(Item item) {
        this.item = item;
    }

    String display() {
        return "<<" + this.item.display() + ">>";
    }

}