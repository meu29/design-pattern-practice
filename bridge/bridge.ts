/* stateパターンとやっていることが同じな気がする */
/* stateは状態に注目し、bridgeは昨日に注目? */ 

/* ベースとなる機能(通話) */
abstract class callImplementation {
    call(): void {}
}

/* ベース機能を発展させた機能 */
class callWithVideoImplementation extends callImplementation {

    call(): void {
        console.log("ビデオを利用して通話を行う");
    }

}

class callWithRecordingImplementation extends callImplementation {
    call(): void {
        console.log("通話を録音しながら行う");
    }
}

class Phone {

    callImplementation: callImplementation;

    constructor(callImplementation: callImplementation) {
        this.callImplementation = callImplementation;
    }

    call(): void {
        this.callImplementation.call();
    }

}

var phone1 = new Phone(new callWithVideoImplementation());
phone1.call();
var phone2 = new Phone(new callWithRecordingImplementation());
phone2.call();