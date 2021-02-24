/* ビルダーパターン(未完) */
/* tsc builder.ts */
/* node builder.js */

interface SaltWaterType {
    salt_weight: number;
    water_weight: number;
    calc_concentration(): number;
}

/* SaltWaterBuilderクラスから呼び出されるクラス */
class SaltWater implements SaltWaterType {

    salt_weight: number;
    water_weight: number;

    constructor(salt_weight: number, water_weight: number) {
        this.salt_weight = salt_weight;
        this.water_weight = water_weight;
    }

    calc_concentration(): number {
        return this.salt_weight / (this.salt_weight + this.water_weight);
    }

}

interface BuilderType {
    addSolute(weight: number): void;
    addSolvent(weight: number): void;
}

/* Builderクラス */
class Builder implements BuilderType {

    /*溶質を追加 */
    /* */
    addSolute(weight: number): void {}

    /* 溶媒を追加 */
    addSolvent(weight: number): void {}

}

class SaltWaterBuilder extends Builder {

    saltWater = new SaltWater(0, 0);

    addSolute(weight: number) : void {
        this.saltWater.salt_weight += weight;
    }

    addSolvent(weight: number): void {
        this.saltWater.water_weight += weight;
    }

}

/* Directorクラス(作成過程) Builderクラスの に従って する */
class Director {

    /* implementsによってクラスの型BuilderTypeが宣言できるようになる */
    /* typeof new Directorはobjectになるが、builder: objectにするとエラー */
    builder: BuilderType = new Builder();

    constructor() {
        this.builder.addSolute(40);
        this.builder.addSolvent(100);
    }

}

var d = new Director();
