package java版.composite;

class MainClass {

    public static void main(String[] args) {

        /* compositeパターンなし */

        Folder folderA = new Folder("フォルダA");

        Folder folderB = new Folder("フォルダB");
        folderA.addChildFolder(folderB);

        Folder folderC = new Folder("フォルダC");
        folderB.addChildFolder(folderC);

        folderC.addChildFile(new File("ファイルa"));

        folderA.viewNames();

        /* compositeパターンあり */

        Composite compositeA = new Composite("フォルダA");

        Composite compositeB = new Composite("フォルダB");
        compositeA.addChildNode(compositeB);

        Composite compositeC = new Composite("フォルダC");
        compositeB.addChildNode(compositeC);

        compositeC.addChildNode(new Leaf("ファイルa"));

        compositeA.viewNames();
        
    }

}

/* 1つのフォルダーには、ファイルとフォルダのどちらか一つだけを格納できるとする */
class Folder {

    String name;
    Folder childFolder = null;
    File childFile = null;

    Folder(String name) {
        this.name = name;
    }

    void addChildFolder(Folder childFolder) {
        this.childFolder = childFolder;
        this.childFile = null;
    }

    void addChildFile(File childFile) {
        this.childFile = childFile;
        this.childFolder = null;
    }

    void viewNames() {

        System.out.println(this.name);

        if (this.childFile != null) {
            this.childFile.viewName();
        } else if (this.childFolder != null) {
            this.childFolder.viewNames();
        }

    }

}

class File {

    String name;

    File(String name) {
        this.name = name;
    }

    void viewName() {
        System.out.println(this.name);
    }

}

/* compositeパターンに書き換える */

/* フォルダ(composite)とファイル(leaf)で共通のインターフェース */
interface Node {
    void viewNames();
}

class Composite implements Node {

    String name;
    Node childNode = null;

    Composite(String name) {
        this.name = name;
    }

    void addChildNode(Node childNode) {
        this.childNode = childNode;
    }

    /* (public)より弱いアクセス権限を割り当てようとしました となるのでpublic明示する */
    public void viewNames() {

        System.out.println(this.name);

        /* 格納されているのがフォルダかファイルかを判別する必要がなくなった */
        if (this.childNode != null) {
            this.childNode.viewNames();
        }

    }

} 

class Leaf implements Node {

    String name;

    Leaf(String name) {
        this.name = name;
    }

    public void viewNames() {
        System.out.println(this.name);
    }

}