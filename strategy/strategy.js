/* ストラテジーパターン */
var Human = /** @class */ (function () {
    function Human(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    return Human;
}());
var AgeCompareMachine = /** @class */ (function () {
    function AgeCompareMachine() {
    }
    AgeCompareMachine.prototype.compare = function (h1, h2) {
        if (h1.age == h2.age) {
            return 0;
        }
        else if (h1.age > h2.age) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return AgeCompareMachine;
}());
var HeightCompareMachine = /** @class */ (function () {
    function HeightCompareMachine() {
    }
    HeightCompareMachine.prototype.compare = function (h1, h2) {
        if (h1.height == h2.height) {
            return 0;
        }
        else if (h1.height > h2.height) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return HeightCompareMachine;
}());
var WeightCompareMachine = /** @class */ (function () {
    function WeightCompareMachine() {
    }
    WeightCompareMachine.prototype.compare = function (h1, h2) {
        if (h1.weight == h2.weight) {
            return 0;
        }
        else if (h1.weight > h2.weight) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return WeightCompareMachine;
}());
var Strategy = /** @class */ (function () {
    function Strategy(human1, human2, keyword) {
        this.human_1 = human1;
        this.human_2 = human2;
        this.keyword = keyword;
    }
    Strategy.prototype.compare = function () {
        if (this.keyword == "age") {
            var compareMachine = new AgeCompareMachine();
        }
        else if (this.keyword == "height") {
            var compareMachine = new HeightCompareMachine();
        }
        else if (this.keyword == "weight") {
            var compareMachine = new WeightCompareMachine();
        }
        else {
            return -9999;
        }
        return compareMachine.compare(this.human_1, this.human_2);
    };
    return Strategy;
}());
var h1 = new Human("taro", 23, 170, 56);
var h2 = new Human("ziro", 19, 190, 68);
var client_1 = new Strategy(h1, h2, "age");
var client_2 = new Strategy(h1, h2, "height");
var client_3 = new Strategy(h1, h2, "weight");
console.log(client_1.compare());
console.log(client_2.compare());
console.log(client_3.compare());
