package java版.visitor;

import java.util.ArrayList;

class MainClass {

    public static void main(String[] args) {

        ArrayList<AcceptVisitor> list = new ArrayList<AcceptVisitor>();
        list.add(new AcceptVisitor(334));
        list.add(new AcceptVisitor(668));
        list.add(new AcceptVisitor(1336));

        Visitor visitor = new Visitor();

        for (int i = 0; i <= list.size() - 1; i++) {
            list.get(i).acceptVisit(visitor);
        }

    }

}

/* 
1. AcceptVisitorがVisitorに自身のインスタンスを与える
2. VisitorがAcceptVisitorインスタンスの値を取り出す(もしくは メソッドを実行する)
データを保持するクラスと、そのクラスが持つデータを使って何かをするクラスに分離する?
*/

class AcceptVisitor {

    int magicNumber;

    AcceptVisitor(int magicNumber) {
        this.magicNumber = magicNumber;
    }

    void acceptVisit(Visitor visitor) {
        visitor.setVisitClassIns(this);
        visitor.doubleMagicNumber();
    }

}

class Visitor {

    AcceptVisitor acceptVisitorClassIns;

    void setVisitClassIns(AcceptVisitor acceptVisitorClassIns) {
        this.acceptVisitorClassIns = acceptVisitorClassIns;
    }

    /* AcceptVisitor内でmagcNumberの倍の値を出力する処理を書きたくないので、visitorに代わってもらう(?) */
    void doubleMagicNumber() {
        System.out.println(acceptVisitorClassIns.magicNumber * 2);
    }

}