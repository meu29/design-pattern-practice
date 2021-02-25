/* ストラテジーパターンなし */

class Ticket_2 {

    type: string;

    constructor(type: string) {
        this.type = type;
    }

     /* (ストラテジーパターンを使わない場合と比較して)メソッドごとにif文を書かなくてはいけない */
    getPrice(): number {
        if (this.type == "child") {
            return 500;
        } else if (this.type == "adult") {
            return 1000;
        } else if (this.type == "pair") {
            return 700
        } else {
            return null;
        }
    }

    getPropriety(): boolean {
        if (this.type == "child") {
            return false;
        } else if (this.type == "adult") {
            return true;
        } else if (this.type == "pair") {
            return true;
        } else {
            return null;
        }
    }

}

var c_2 = new Ticket_2("child");
console.log(c_2.getPrice());
console.log(c_2.getPropriety());
var a_2 = new Ticket_2("adult");
console.log(a_2.getPrice());
console.log(a_2.getPropriety());
var p_2 = new Ticket_2("pair");
console.log(p_2.getPrice());
console.log(p_2.getPropriety());