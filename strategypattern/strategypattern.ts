/* ストラテジーパターン */

interface TicketStrategy {
    getPrice(): number;
    getPropriety(): boolean;
}

class ChildTicketStrategy implements TicketStrategy {

    getPrice(): number {
        return 500;
    }

    getPropriety(): boolean {
        return false;
    }

}

class AdultTicketStrategy implements TicketStrategy {

    getPrice(): number {
        return 1000;
    }

    getPropriety(): boolean {
        return true;
    }


}

class PairTicketStrategy implements TicketStrategy {

    getPrice(): number {
        return 700;
    }

    getPropriety(): boolean {
        return true;
    }

}

class Ticket {

    strategy: TicketStrategy;

    /* メソッドごとにif文を書かなくて済む */
    constructor(type: string) {
        if (type == "child") {
            this.strategy = new ChildTicketStrategy();
        } else if (type == "adult") {
            this.strategy = new AdultTicketStrategy();
        } else if (type == "pair") {
            this.strategy = new PairTicketStrategy();
        } else {
            this.strategy = null;
        }
    }

    getPrice(): number {
        return this.strategy.getPrice();
    }

    getPropriety(): boolean {
        return this.strategy.getPropriety();
    }

}

var c = new Ticket("child");
console.log(c.getPrice());
console.log(c.getPropriety());
var a = new Ticket("adult");
console.log(a.getPrice());
console.log(a.getPropriety());
var p = new Ticket("pair");
console.log(p.getPrice());
console.log(p.getPropriety());