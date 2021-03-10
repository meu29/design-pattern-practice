interface Observer {

}

class Reader implements Observer {

    constructor(name: string) {

    }

    onGet(): void {
        console.log("getリクエスト");
    }

}

interface Observable {
    on(observer: Observer): void;
    off(observer: Observer): void;
}

class Publisher implements Observable {

    reders

}