/* mementoパターン */
/* インスタンスの状態を復元するためのクラス(セーブデータのようなもの)　*/

type record = {
    win: number;
    lose: number;
}

type saveData = {
    money: number;
    record: record;
}

class Memento {

    saveData: saveData

    save(saveData: saveData): void {
        this.saveData = saveData;
    }

    rollBack(): saveData {
        return this.saveData;
    }

}

class Player {

    money: number;
    record: record;
    memento: Memento;

    constructor(money: number) {
        this.money = money;
        this.record = {win: 0, lose: 0};
        /* Mementoクラスのインスタンスはここで作成 */
        /* メソッドを実行するたびに作成すると保存していた内容が消えるので意味がなくなる */
        this.memento = new Memento();
    }

    play(): void {

        if (Math.floor(Math.random() * Math.floor(6)) % 2 == 0) {
            this.money *= 0.5;
            this.record.win += 1;
        } else {
            this.money *= 1.5;
            this.record.lose += 1;
        }

    }

    createMemento(): void {
        this.memento.save({money: this.money, record: this.record});
    }

    restoreMemento(): void {
        var saveData: saveData = this.memento.rollBack();
        this.money = saveData.money;
        this.record = saveData.record;
    }

    getStatus(): void {
        console.log("所持金は" + this.money + "円");
        console.log(this.record.win.toString() + "勝" + this.record.lose.toString() + "敗");
    }

}

var player: Player = new Player(10000);

/* 初期状態をmementoに保存 */
player.createMemento();

/* 所持金が増減し、勝ち負けのどちらかが増える */
player.play();
player.getStatus();

/* Mementoを使って初期状態(所持金 => 10000円, 勝敗 => 0勝0敗)に戻る */
player.restoreMemento();
player.getStatus();
