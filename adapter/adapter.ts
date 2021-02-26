/* アダプターパターン(未完) */
/*

class Banner {

    char: string;

    constructor(char: string) {
        this.char = char;
    }

    indicateWithParen(): void {
        console.log("(" + this.char + ")");
    }

    indicateWithAster(): void {
        console.log("*" + this.char + "*");
    }

}

interface Print {
    printWithParen(): void;
    printWithAster(): void;
}
*/

/* アダプタークラス 独自のメソッドは実装しない*/
/*
class PrintBanner extends Banner implements Print {

    printWithParen(): void {
        this.indicateWithParen();
    }

    printWithAster(): void {
        this.indicateWithAster();
    }

}

var p: Print = new PrintBanner("hello");
p.printWithParen();
p.printWithAster();
*/