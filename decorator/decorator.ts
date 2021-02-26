/* デコレータ */
/* 既存のクラスを変更することなく機能を拡張 */

interface Icecream {
    howSweet(): string;
    howPrice(): number;
}

class BananaIcecream implements Icecream {

    howSweet(): string {
        return "バナナ味";
    }

    howPrice(): number {
        return 300;
    }

}

class AppleIcecream implements Icecream {

    howSweet(): string {
        return "りんご味";
    }

    howPrice(): number {
        return 260;
    }


}

/* 素のアイスクリームのクラスBananaIcecream, AppleIcecream)を継承しないのがポイント */
class IcecreamWithCookieTopping implements Icecream {

    icecream: Icecream;

    constructor(icecream: Icecream) {
        this.icecream = icecream;
    }

    howSweet(): string {
        return this.icecream.howSweet() + "とクッキーのトッピング";
    } 

    howPrice(): number {
        return this.icecream.howPrice() + 120;
    }

}

class IcecreamWithMarshmallowTopping implements Icecream {

    icecream: Icecream;

    constructor(icecream: Icecream) {
        this.icecream = icecream;
    }

    howSweet(): string {
        return this.icecream.howSweet() + "とマシュマロのトッピング";
    } 

    howPrice(): number {
        return this.icecream.howPrice() + 170;
    }

}

/* 柔軟な組み合わせ */
var c:IcecreamWithCookieTopping = new IcecreamWithCookieTopping(new BananaIcecream());
console.log(c.howSweet());
console.log(c.howPrice());
var m: IcecreamWithMarshmallowTopping = new IcecreamWithMarshmallowTopping(new AppleIcecream());
console.log(m.howSweet());
console.log(m.howPrice());
var c2:IcecreamWithCookieTopping = new IcecreamWithCookieTopping(new AppleIcecream());
console.log(c2.howSweet());
console.log(c2.howPrice());
var m2: IcecreamWithMarshmallowTopping = new IcecreamWithMarshmallowTopping(new BananaIcecream());
console.log(m2.howSweet());
console.log(m2.howPrice());