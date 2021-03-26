package java版.templatemethod;

class MainClass {

    public static void main(String[] args) {
        Steak ms = new MidiumSteak();
        Steak rs = new RareSteak();
        ms.cook();
        rs.cook();
    }

}

abstract class Steak {

    void cook() {
        this.seasoning();
        this.bake();
        this.serve();
    }

    /* サブクラス間で統一したい(変えたくない)処理1 */
    void seasoning() {
        System.out.println("塩と胡椒を1.5g振ります");
    }

    /* サブクラスごとに変えたい処理 -> テンプレートメソッドにする 必ずabstract protected */
    protected abstract void bake();

    /* サブクラス間で統一したい(変えたくない)処理2 */
    void serve() {
        System.out.println("大皿に盛り付けます");
    }

}

class MidiumSteak extends Steak {

    /* テンプレートメソッドをオーバーライド */
    public void bake() {
        System.out.println("5分焼きます");
    }

}

class RareSteak extends Steak {

    public void bake() {
        System.out.println("3分焼きます");
    }

}