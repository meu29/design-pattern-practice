/* java MainClass.java 010 223 4456 */

package java版.builder;

public class MainClass {

    String phoneNumber;

    MainClass(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public static void main(String[] args) {
        MainClass myInstance = new Director().createMainClassInstance(new Builder(), args[0], args[1], args[2]);
        System.out.println(myInstance.phoneNumber);
        /* 用途に合わせてDirectorクラスを切り替える */
        MainClass myInstance2 = new Directore2().createMainClassInstance(new Builder(), args[1], args[2]);
        System.out.println("090" + myInstance2.phoneNumber);
    }

}

class Builder {

    String phoneNumber = "";

    void inputFirstNumbers(String numbers) {
        phoneNumber += numbers;
    }

    void inputSecondNumbers(String numbers) {
        phoneNumber += "-" + numbers + "-";
    }

    void inputThirdNumbers(String numbers) {
        phoneNumber += numbers;
    }

    /* 元のクラスのコンストラクタを呼び出す */
    MainClass getMainClassInstance() {
        return new MainClass(this.phoneNumber);
    }

}

/* ビルダークラスのメソッドのうち、どれをどの順番で使用するかを決めるクラス */
/* xxx-xxx-xxxxを全て入力する場合 */
class Director {

    MainClass createMainClassInstance(Builder builder, String first_numbers, String second_numbers, String third_numbers) {

        builder.inputFirstNumbers(first_numbers);
        builder.inputSecondNumbers(second_numbers);
        builder.inputThirdNumbers(third_numbers);
        /* BuilderクラスのgetMainClassInstanceメソッドの結果(MainClassのインスタンス)を返す(MainClassの変数myInstanceに代入する) */
        return builder.getMainClassInstance();

    }

}

/* 090-xxx-xxxxの内xの部分のみ自分で入力する場合 */
class Directore2 {

    MainClass createMainClassInstance(Builder builder, String second_numbers, String third_numbers) {

        builder.inputSecondNumbers(second_numbers);
        builder.inputThirdNumbers(third_numbers);
        return builder.getMainClassInstance();

    }

}
