/* mementoパターン */
/* インスタンスの状態を復元するためのクラス(セーブデータのようなもの)　*/
var Memento = /** @class */ (function () {
    function Memento() {
    }
    Memento.prototype.save = function (saveData) {
        this.saveData = saveData;
    };
    Memento.prototype.rollBack = function () {
        return this.saveData;
    };
    return Memento;
}());
var Player = /** @class */ (function () {
    function Player(money) {
        this.money = money;
        this.record = { win: 0, lose: 0 };
        /* Mementoクラスのインスタンスはここで作成 */
        /* メソッドを実行するたびに作成すると保存していた内容が消えるので意味がなくなる */
        this.memento = new Memento();
    }
    Player.prototype.play = function () {
        if (Math.floor(Math.random() * Math.floor(6)) % 2 == 0) {
            this.money *= 0.5;
            this.record.win += 1;
        }
        else {
            this.money *= 1.5;
            this.record.lose += 1;
        }
    };
    Player.prototype.createMemento = function () {
        this.memento.save({ money: this.money, record: this.record });
    };
    Player.prototype.restoreMemento = function () {
        var saveData = this.memento.rollBack();
        this.money = saveData.money;
        this.record = saveData.record;
    };
    Player.prototype.getStatus = function () {
        console.log("所持金は" + this.money + "円");
        console.log(this.record.win.toString() + "勝" + this.record.lose.toString() + "敗");
    };
    return Player;
}());
var player = new Player(10000);
/* 初期状態をmementoに保存 */
player.createMemento();
/* 所持金が増減し、勝ち負けのどちらかが増える */
player.play();
player.getStatus();
/* Mementoを使って初期状態(所持金 => 10000円, 勝敗 => 0勝0敗)に戻る */
player.restoreMemento();
player.getStatus();
