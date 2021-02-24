/* アブストラクトファクトリーパターン(未完 正しいのか不明) */
/* tsc abstractfactory.ts */
/* node abstractfactory.js */

interface MeatType {
    name: string;
}

class Beaf implements MeatType {
    name: string = "牛肉";
}

class Pork implements MeatType {
    name: string = "豚肉";
}

interface SauceType {
    name: string;
}

class WineSauce implements SauceType{
    name: string = "赤ワインソース";
}

class OnionSauce implements SauceType{
    name: string = "玉ねぎソース";
}

interface SteakType {
    meat: MeatType;
    sauce: SauceType;
    select_meat(meat: MeatType): void;
    select_sauce(sauce: SauceType): void
}

class Steak implements SteakType {

    meat: MeatType;
    sauce: SauceType;

    select_meat(meat: MeatType): void {
        this.meat = meat;
    }

    select_sauce(sauce: SauceType): void {
        this.sauce = sauce;
    }

}

/* アブストラクトファクトリーを介さずに実行 */

var steak_1 = new Steak();
steak_1.select_meat(new Beaf());
steak_1.select_sauce(new WineSauce());

var steak_2 = new Steak();
steak_2.select_meat(new Pork());
steak_2.select_sauce(new OnionSauce());

console.log(steak_1);
console.log(steak_2);

/* アブストラクトファクトリーを介して実行 */

interface FactoryType {
    getMeat(): MeatType;
    getSauce(): SauceType;
}

/* 牛肉 + ワインソース */
class BeafWineSteakFactory implements FactoryType {

    getMeat(): MeatType {
        return new Beaf();
    }

    getSauce(): SauceType {
        return new WineSauce();
    }

}

/* 豚肉 + オニオンソース */
class PorkOnioinSteakFactory implements FactoryType  {

    getMeat() {
        return new Pork();
    }

    getSauce() {
        return new OnionSauce();
    }

}

interface ClientType {
    keyword: string;
    createFactory(keyword: string): FactoryType;
    product: any;
}

/* クラスにする意味がないかも */
class Client implements ClientType {

    keyword: string;
    product: any;

    constructor(keyword: string) {
        var steak: SteakType = new Steak();
        var factory: FactoryType = this.createFactory(keyword);
        steak.select_meat(factory.getMeat());
        steak.select_sauce(factory.getSauce());
        this.product = steak;
    }

    createFactory(keyword: string): FactoryType {
        if (keyword == "牛肉とワイン") {
            return new BeafWineSteakFactory();
        } else {
            return new PorkOnioinSteakFactory();
        }
    }

}

var factory_steak_1: ClientType = new Client("牛肉とワイン");
console.log(factory_steak_1);
var factory_steak_2: ClientType = new Client("牛以外");
console.log(factory_steak_2);


