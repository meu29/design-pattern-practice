package prototype;

import java.util.*;

/* インスタンスから新しいインスタンスを作るprototype */

class Main {
    public static void main(String[] args) {

        Manager manager = new Manager();
        manager.register("Mailadress Creator", new MailAdressCreator("gmail.com"));

        /* キーに一致するインスタンスを複製 */
        /* コンストラクタは実行されない(メンバの値はregisterメソッドで登録したインスタンスのメンバの値と同じになる ここではprovide = gmail.com) */
        Product product1 = manager.create("Mailadress Creator");
        product1.use("hogehoge");
        Product product2 = manager.create("Mailadress Creator");
        product2.use("fugafuga");

        manager.register("Mailadress Creator", new MailAdressCreator("icloud.com"));
        /* provide = icloud.comになる */
        Product product3 = manager.create("Mailadress Creator");
        product3.use("piyopiyo");

        /* prototypeを使わない */
        //Product product1 = new MailAdressCreator();
        //product1.use("hogehoge");
        //Product product2 = new MailAdressCreator();
        //product2.use("fugafuga");
        //Product product3 = new MailAdressCreator();
        //product3.use("piypiyo");

    }
}

class Manager {

    HashMap products = new HashMap();

    void register(String name, Product product) {
        /* key, value */
        this.products.put(name, product); 
    }

    Product create(String name) {
        Product product = (Product)this.products.get(name);
        return product.createClone();
    }

 
}

interface Product extends Cloneable {
    abstract void use(String charItem);
    /* 自身のインスタンスを複製するメソッド */
    abstract Product createClone();
}

class MailAdressCreator implements Product {

    String provider;

    MailAdressCreator(String provider) {
        this.provider = provider;
    }
    
    public void use(String charItem) {
        System.out.println(charItem + "1124@" + this.provider);
    }

    public Product createClone() {

        Product product = null;

        try {
            product = (Product)clone();
        } catch (CloneNotSupportedException e) {
            System.out.println(e);
        }

        return product;

    }

}