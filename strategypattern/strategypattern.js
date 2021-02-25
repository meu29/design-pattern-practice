/* ストラテジーパターン */
var ChildTicketStrategy = /** @class */ (function () {
    function ChildTicketStrategy() {
    }
    ChildTicketStrategy.prototype.getPrice = function () {
        return 500;
    };
    ChildTicketStrategy.prototype.getPropriety = function () {
        return false;
    };
    return ChildTicketStrategy;
}());
var AdultTicketStrategy = /** @class */ (function () {
    function AdultTicketStrategy() {
    }
    AdultTicketStrategy.prototype.getPrice = function () {
        return 1000;
    };
    AdultTicketStrategy.prototype.getPropriety = function () {
        return true;
    };
    return AdultTicketStrategy;
}());
var PairTicketStrategy = /** @class */ (function () {
    function PairTicketStrategy() {
    }
    PairTicketStrategy.prototype.getPrice = function () {
        return 700;
    };
    PairTicketStrategy.prototype.getPropriety = function () {
        return true;
    };
    return PairTicketStrategy;
}());
var Ticket = /** @class */ (function () {
    function Ticket(type) {
        if (type == "child") {
            this.strategy = new ChildTicketStrategy();
        }
        else if (type == "adult") {
            this.strategy = new AdultTicketStrategy();
        }
        else if (type == "pair") {
            this.strategy = new PairTicketStrategy();
        }
        else {
            this.strategy = null;
        }
    }
    Ticket.prototype.getPrice = function () {
        return this.strategy.getPrice();
    };
    Ticket.prototype.getPropriety = function () {
        return this.strategy.getPropriety();
    };
    return Ticket;
}());
var c = new Ticket("child");
console.log(c.getPrice());
console.log(c.getPropriety());
var a = new Ticket("adult");
console.log(a.getPrice());
console.log(a.getPropriety());
var p = new Ticket("pair");
console.log(p.getPrice());
console.log(p.getPropriety());
