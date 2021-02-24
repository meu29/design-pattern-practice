class SaltWaterWithoutBuilder {

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

var salt_water_1 = new SaltWaterWithoutBuilder(100, 40);
console.log(salt_water_1.calc_concentration());