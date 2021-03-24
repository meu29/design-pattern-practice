package java版.factorymethod;

class Main {

    public static void main(String[] args) {

        Factory factory = new IdCardFactory();
        Product card1 = factory.createProduct("田中");
        Product card2 = factory.createProduct("山下");
        Product card3 = factory.createProduct("大谷");
        card1.use();
        card2.use();
        card3.use();

        Factory factory2 = new PhysicalKeyFactory();
        Product key = factory2.createProduct("岸田");
        key.use();

    }
}

/* 製品のクラス(抽象) 自身の持ち主を表示するメソッドを持つ */
abstract class Product {
    abstract void use();
}

/* 工場のクラス(抽象) 各工場に対応する製品クラスのインスタンスを作成するメソッドを持つ */
abstract class Factory {
    abstract Product createProduct(String owner);
}

/* 具体的な製品のクラス */
class IdCard extends Product {

    private String owner;

    IdCard(String owner) {
        this.owner = owner;
    }

    void use() {
        System.out.println(this.owner + "のIDカードで認証を行います");
    }

}

/* 具体的な製品に対応する具体的な工場のクラス */
class IdCardFactory extends Factory {

    Product createProduct(String owner) {
        return new IdCard(owner);
    }

}

/* 具体的な製品のクラス2 */
class PhysicalKey extends Product {

    private String owner;

    PhysicalKey(String owner) {
        this.owner = owner;
    }

    void use() {
        System.out.println(this.owner + "のスペアキーを使います");
    }
}

/* 具体的な製品に対応する具体的な工場のクラス2 */
class PhysicalKeyFactory extends Factory {

    Product createProduct(String owner) {
        return new PhysicalKey(owner);
    }

}