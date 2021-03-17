package java版.observer;

import java.util.ArrayList;

class MainClass {

    public static void main(String[] args) {
        Item item = new Item(400);
        item.addObserver(new BuyerObserver());
        item.addObserver(new SellerObserver());
        item.downPrice(300);
    }

}

class Item {

    int price;
    ArrayList<Observer> observerList = new ArrayList<Observer>();

    Item(int price) {
        this.price = price;
    }

    void addObserver(Observer newObserver) {
        this.observerList.add(newObserver);
    }

    void downPrice(int afterPrice) {
        this.price = afterPrice;
        /* 各オブサーバーに値下げを通知 */
        for (int i = 0; i <= this.observerList.size() - 1; i++) {
            observerList.get(i).getAfterPrice(this.price);
        }
    }

}

interface Observer {
    void getAfterPrice(int afterPrice);
}

class BuyerObserver implements Observer {

    public void getAfterPrice(int afterPrice) {
        System.out.println(String.valueOf(afterPrice) + "円に値下がりしました。");
    }

}

class SellerObserver implements Observer {

    int myItemPrice;

    public void getAfterPrice(int afterPrice) {
        this.myItemPrice = afterPrice - 50; 
        System.out.println(String.valueOf(afterPrice) + "円に値下がりしたので、自身の商品を" + String.valueOf(this.myItemPrice) + "円に値下げしました。");
    }

}

/* 
observer => 通知元(Item)を除くクラスどうしの間に関係は生じない(Buyer - Buyer間やBuyer - Seller間など) 
mediator => mediatorクラスを仲介させることでクラス間に関係を生じさせる
(例)新しいSellerが追加されたらMediatorは既存のSellerに通知する。通知を受け取ったSellerは自身のmyItemPriceの値を減らす(値下げ) など。
*/