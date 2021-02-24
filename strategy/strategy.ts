/* ストラテジーパターン */

/* インターフェースをクラスに適用する => クラスが持つべき変数やメソッド、及びそれらの型が一致しているかをチェックする働き */
interface HumanType {
    name: string;
    age: number;
    height: number;
    weight: number;
}

class Human implements HumanType {

    name: string;
    age: number;
    height: number;
    weight: number;

    constructor(name: string, age: number, height: number, weight: number) {
        this.name = name;
        this.age = age;    
        this.height = height;
        this.weight = weight;
    }

}

interface CompareMachineType {
    compare(h1: Human, h2: Human): number;
}

class AgeCompareMachine implements CompareMachineType {

    compare(h1: Human, h2: Human): number {

        if (h1.age == h2.age) {
            return 0;
        } else if (h1.age > h2.age) {
            return 1;
        } else {
            return -1;
        }
    }

}

class HeightCompareMachine implements CompareMachineType {

    compare(h1: Human, h2: Human): number {

        if (h1.height == h2.height) {
            return 0;
        } else if (h1.height > h2.height) {
            return 1;
        } else {
            return -1;
        }
    }

}

class WeightCompareMachine implements CompareMachineType {

    compare(h1: Human, h2: Human): number {

        if (h1.weight == h2.weight) {
            return 0;
        } else if (h1.weight > h2.weight) {
            return 1;
        } else {
            return -1;
        }
    }

}

class Strategy {

    human_1: Human;
    human_2: Human;
    keyword: string;

    constructor(human1: Human, human2: Human, keyword: string) {
        this.human_1 = human1;
        this.human_2 = human2;
        this.keyword = keyword;
    }

    compare(): number {

        /* age等の比較の処理を直接記載すると、if文がネスト(入れ子)になり読みづらくなる */
        /* 比較対象ごとにクラスを作成し、処理をそれらに任せることで読みやすくする? */
        /* 「目的に応じたアルゴリズムの選択・切り替え」らしい */
        if (this.keyword == "age") {
            var compareMachine: CompareMachineType = new AgeCompareMachine();
        } else if (this.keyword == "height") {
            var compareMachine: CompareMachineType = new HeightCompareMachine();
        } else if (this.keyword == "weight") {
            var compareMachine: CompareMachineType = new WeightCompareMachine();
        } else {
            return -9999;
        }

        return compareMachine.compare(this.human_1, this.human_2);
    }

}

var h1 = new Human("taro", 23, 170, 56);
var h2 = new Human("ziro", 19, 190, 68);
var client_1 = new Strategy(h1, h2, "age");
var client_2 = new Strategy(h1, h2, "height");
var client_3 = new Strategy(h1, h2, "weight");
console.log(client_1.compare());
console.log(client_2.compare());
console.log(client_3.compare());