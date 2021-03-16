package java版.adaptor;

public class MainClass {

    public static void main(String[] args) { 

        PersonA personA = new PersonA("田中", "太郎");
        Adapter adapter = new Adapter(personA);
        new NameViewer().viewName(adapter);

        PersonB personB = new PersonB("田中太郎");
        new NameViewer().viewName(personB);

    }

}

/* 姓と名を別々のメンバとして持つクラス */
class PersonA {
    
    String first_name;
    String last_name;

    PersonA(String first_name, String last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    
}

/* 姓名を1つの文字列にし、メンバとして保持するクラス */
class PersonB {

    String name;

    PersonB(String name) {
        this.name = name;
    }

    String getName() {
        return this.name;
    }

}

class NameViewer {

    /* PersonBにしか対応していない */
    void viewName(PersonB personB) {
        System.out.println(personB.getName());
    }

}

/* PersonAをPersonBの代わりに使えるようにする(2つのクラスの相違を埋める) */
class Adapter extends PersonB {

    PersonA personAInstance;

    Adapter(PersonA personAinstance) {
        /* this.nameにnullを代入(親クラスのコンストラクタ) */
        /* 自身をPersonBの子クラスとする */
        super(null);
        this.personAInstance = personAinstance;
    }

    /* オーバーライド */
    String getName() {
        return this.personAInstance.first_name + this.personAInstance.last_name;
    }

}