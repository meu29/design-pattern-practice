/* コマンドパターン */

/* receiver */
/* 命令によって操作される対象のインターフェース(抽象クラスにして良いかは不明) */
abstract class Receiver {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

/* concrete receiver */
/* 具体的なレシーバの内容 */
class Television extends Receiver {

    turnOn(): void {
        console.log("テレビの電源をONにしました");
    }

    turnOff(): void {
        console.log("テレビの電源をOFFにしました");
    }
    
}

/* これもconcrete receiver */
class VideoDeck extends Receiver {

    turnOn(): void {
        console.log("ビデオデッキの電源をONにしました");
    }

    turnOff(): void {
        console.log("ビデオデッキの電源をOFFにしました");
    }

}

/* command */
/* 命令のインターフェース */
interface Command {
    execute(): void;
}


/* concrete command */
/* 具体的な命令 */
class TurnOnCommand implements Command {

    reciver: Receiver;

    constructor(reciver: Receiver) {
        this.reciver = reciver;
    }

    execute(): void {
        this.reciver.turnOn();
    }

} 

/* これもconcrete command */
class TurnOffCommand implements Command {

    reciver: Receiver;

    constructor(reciver: Receiver) {
        this.reciver = reciver;
    }

    execute(): void {
        this.reciver.turnOff();
    }

}

/* invoker */
/* 命令の集合を持ち、それらを実行するクラス */
class CompositeCommand {

    commands: Array<Command> = [];

    append(command: Command): void {
        this.commands.push(command);
    }

    execute(): void {
        for (var i = 0; i<= this.commands.length - 1; i++) {
            this.commands[i].execute();
        }
    }

}

/* client */
var cc : CompositeCommand = new CompositeCommand();
cc.append(new TurnOnCommand(new Television()));
cc.append(new TurnOnCommand(new VideoDeck()));
cc.append(new TurnOffCommand(new VideoDeck()));
cc.append(new TurnOffCommand(new Television()));
cc.execute();

