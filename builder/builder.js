/* ビルダーパターン */
/* tsc builder.ts */
/* node builder.js */
/* 普通にclass定義した場合 */
var SaltWater = /** @class */ (function () {
    function SaltWater(salt_weight, water_weight) {
        this.salt_weight = salt_weight;
        this.water_weight = water_weight;
    }
    SaltWater.prototype.calc_concentration = function () {
        return this.salt_weight / (this.salt_weight + this.water_weight);
    };
    return SaltWater;
}());
var salt_water_1 = new SaltWater(100, 40);
console.log(salt_water_1.calc_concentration());
/* Builderクラス */
var Builder = /** @class */ (function () {
    function Builder() {
    }
    /*溶質を追加 */
    Builder.prototype.addSolute = function (weight) {
    };
    /* 溶媒を追加 */
    Builder.prototype.addSolvent = function (weight) {
    };
    Builder.prototype.calc_concentration = function () {
    };
    return Builder;
}());
/* Directorクラス(作成過程) Builderクラスの に従って する */
var Director = /** @class */ (function () {
    function Director() {
        this.builder = new Builder();
        this.builder.addSolute(40);
        this.builder.addSolvent(100);
    }
    return Director;
}());
var d = new Director();
console.log(typeof d.builder);
