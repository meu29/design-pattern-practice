package java版.strategy;

class MainClass {

    Strategy strategy;

    void setStrategy(Strategy strategy) {
        this.strategy = strategy;
    }

    public static void main(String[] args) {

        MainClass myIns = new MainClass();
        myIns.setStrategy(new StrategyA());
        myIns.strategy.judge(6);
        myIns.strategy.judge(4);
        /* strategyの切り替え */
        myIns.setStrategy(new StrategyB());
        myIns.strategy.judge(10);
        myIns.strategy.judge(6);
        myIns.strategy.judge(4);

    }

}

abstract class Strategy {
    abstract void judge(int score);
}

/* 
参考書には「入力するデータと出力するデータが同じ複数のアルゴリズムに使う」とある
 => アルゴリズムAの引数の型 = アルゴリズムBの引数の型　
    アルゴリズムAの戻り値の型 = アルゴリズムBの戻り値の型 という意味?
    下記ではAもBも引数の型がintで戻り値の型がvoid
参考書の例で挙げられている2つのクラスのうち、前者の戻り値が1もしくは-1で後者の戻り値が1,0,-1のどれかであるため、戻り値が全く同じでなければダメということはない？
*/
/* strategy側でprintしても良いっぽい(https://qiita.com/kotetsu75/items/186af7006b44703c0379) */
class StrategyA extends Strategy {

    void judge(int score) {
        if (score > 5) {
            System.out.println("合格");
        } else {
            System.out.println("不合格");
        }
    }

}

class StrategyB extends Strategy {

    void judge(int score) {
        if (score == 10) {
            System.out.println("評価: A");
        } else if (score > 5) {
            System.out.println("評価: B");
        } else {
            System.out.println("評価: C");
        }
    }

}