/* コマンドパターン */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    return Receiver;
}());
/* concrete receiver */
/* 具体的なレシーバ(コマンドによって操作される対象) */
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Television.prototype.turnOn = function () {
        console.log("テレビの電源をONにしました");
    };
    Television.prototype.turnOff = function () {
        console.log("テレビの電源をOFFにしました");
    };
    return Television;
}(Receiver));
/* これもconcrete receiver */
var VideoDeck = /** @class */ (function (_super) {
    __extends(VideoDeck, _super);
    function VideoDeck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoDeck.prototype.turnOn = function () {
        console.log("ビデオデッキの電源をONにしました");
    };
    VideoDeck.prototype.turnOff = function () {
        console.log("ビデオデッキの電源をOFFにしました");
    };
    return VideoDeck;
}(Receiver));
/* concrete command */
/* 具体的な命令 */
var TurnOnCommand = /** @class */ (function () {
    function TurnOnCommand(reciver) {
        this.reciver = reciver;
    }
    TurnOnCommand.prototype.execute = function () {
        this.reciver.turnOn();
    };
    return TurnOnCommand;
}());
/* これもconcrete command */
var TurnOffCommand = /** @class */ (function () {
    function TurnOffCommand(reciver) {
        this.reciver = reciver;
    }
    TurnOffCommand.prototype.execute = function () {
        this.reciver.turnOff();
    };
    return TurnOffCommand;
}());
/* invoker */
/* コマンドの集合を持ち、それらを実行するクラス */
var CompositeCommand = /** @class */ (function () {
    function CompositeCommand() {
        this.commands = [];
    }
    CompositeCommand.prototype.append = function (command) {
        this.commands.push(command);
    };
    CompositeCommand.prototype.execute = function () {
        for (var i = 0; i <= this.commands.length - 1; i++) {
            this.commands[i].execute();
        }
    };
    return CompositeCommand;
}());
/* client */
/* new コマンドクラス()をしても大丈夫そう */
var cc = new CompositeCommand();
cc.append(new TurnOnCommand(new Television()));
cc.append(new TurnOnCommand(new VideoDeck()));
cc.append(new TurnOffCommand(new VideoDeck()));
cc.append(new TurnOffCommand(new Television()));
cc.execute();
