package java版.factorymethod;

class MainClass {

    public static void main(String[] args) {

        /* MainClass側ではClassA1のペアとなるクラスがB1なのかB2なのかは分からない(ClassA2に関しても同様) */
        /* それでもファクトリーメソッドパターンの適用で正しいペアを呼び出すことができる */
        ClassA instanceA1 = new ClassA1();
        ClassB instanceB1 = instanceA1.createClassB();
        System.out.println(instanceA1.getName());
        System.out.println(instanceA1.getBirthday());
        System.out.println(instanceB1.getAddress());
        System.out.println(instanceB1.getPhoneNumber());


        ClassA instanceA2 = new ClassA2();
        ClassB instanceB2 = instanceA2.createClassB();
        System.out.println(instanceA2.getName());
        System.out.println(instanceA2.getBirthday());
        System.out.println(instanceB2.getAddress());
        System.out.println(instanceB2.getPhoneNumber());

    }
    
}

/* 氏名, 生年月日, 住所, 家の電話番号をメンバとして持つ1つのクラスがあるとする */
/* 前者2つと後者2つをそれぞれメンバとして持つ2つのクラスに分ける */

abstract class ClassA {

    abstract String getName();
    abstract Number getBirthday();
    abstract ClassB createClassB();

}

/* classA1とclassB1、classA2はclassB2とペアの関係 */
class ClassA1 extends ClassA {

    String getName() {
        return "田中太郎";
    }

    Number getBirthday() {
        return 19950102;
    }

    /* ファクトリメソッド(ペアとなるクラスのインスタンスを作成するメソッド) */
    ClassB createClassB() {
        return new ClassB1();
    }

}

class ClassA2 extends ClassA {

    String getName() {
        return "丸山次郎";
    }

    Number getBirthday() {
        return 19931104;
    }

    ClassB createClassB() {
        return new ClassB2();
    }

}

abstract class ClassB {

    abstract String getAddress();
    abstract String getPhoneNumber();

}

class ClassB1 extends ClassB {

    String getAddress() {
        return "〒030-0802 青森県青森市本町５丁目６−２";
    }

    String getPhoneNumber() {
        return "060-334-0923";
    }

}

class ClassB2 extends ClassB {

    String getAddress() {
        return "〒350-2201 埼玉県鶴ヶ島市富士見４丁目８−１５";
    }

    String getPhoneNumber() {
        return "070-219-1708";
    }

}