package visitor;

import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        Folder folder = new Folder("HOME");
        folder.addItem(new File("hoge.txt"));
        Folder subFolder = new Folder("document");
        subFolder.addItem(new File("fuga.docx"));
        folder.addItem(subFolder);
        folder.acceptVisitor(new Visitor());
    }
}

class Visitor {

    /* 同じ名前で引数が異なるメソッドは作成可 */
    void visit(File file) {
        file.getName();
    }
    
    void visit(Folder folder) {

        folder.getName();
        ArrayList<VisitedElement> items = folder.getItems();

        for (int i = 0; i <= items.size() - 1; i++) {
            /* Visitor側では、フォルダの各itemsの要素がフォルダかファイルかを区別しないで実行できる */
            /* (forの中でif typeof items[i] == Folder for .. i <= items[i].items.size() - 1 .. else .. をしなくで良いということ) */
            items.get(i).acceptVisitor(this);
        }

    }

}

/* ファイルもフォルダもビジターにvisitされるモノなので、共通のインターフェースを持つ。 */
interface VisitedElement {
    abstract void acceptVisitor(Visitor visit);
}

class File implements VisitedElement {

    private String name;

    File(String name) {
        this.name = name;
    }

    public void getName() {
        System.out.println("ファイル名: " + this.name);
    }

    public void acceptVisitor(Visitor visitor) {
        visitor.visit(this);
    }

}

class Folder implements VisitedElement {

    /* privateを設定し、そのメンバの値を変更する関数を用意しなければ値を変更できなくさせることができる。 */
    private String name;
    private ArrayList<VisitedElement> items;

    Folder(String name) {
        this.name = name;
        this.items = new ArrayList<VisitedElement>();
    }

    public void getName() {
        System.out.println("フォルダ名: " + this.name);
    }

    public void addItem(VisitedElement item) {
        this.items.add(item);
    }

    public ArrayList<VisitedElement> getItems() {
        return this.items;
    }

    public void acceptVisitor(Visitor visitor) {
        visitor.visit(this);
    }

}
