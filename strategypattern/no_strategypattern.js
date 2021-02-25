var Ticket_2 = /** @class */ (function () {
    function Ticket_2(type) {
        this.type = type;
    }
    Ticket_2.prototype.getPrice = function () {
        if (this.type == "child") {
            return 500;
        }
        else if (this.type == "adult") {
            return 1000;
        }
        else if (this.type == "pair") {
            return 700;
        }
        else {
            return null;
        }
    };
    Ticket_2.prototype.getPropriety = function () {
        if (this.type == "child") {
            return false;
        }
        else if (this.type == "adult") {
            return true;
        }
        else if (this.type == "pair") {
            return true;
        }
        else {
            return null;
        }
    };
    return Ticket_2;
}());
var c_2 = new Ticket_2("child");
console.log(c_2.getPrice());
console.log(c_2.getPropriety());
var a_2 = new Ticket_2("adult");
console.log(a_2.getPrice());
console.log(a_2.getPropriety());
var p_2 = new Ticket_2("pair");
console.log(p_2.getPrice());
console.log(p_2.getPropriety());
