/* stateパターンの復習 */

interface state {
    work(): void;
}

class NormalEmployee implements state {
    work(): void { console.log("プロジェクトの作業をします") }
}

class Director implements state {
    work(): void { console.log("プロジェクトの管理をします") }
}

class Chief implements state {
    work(): void { console.log("プロジェクト間の調整をします") }
}

class Position {

    state: state;

    setState(state: state): void {
        this.state = state;
    }

    work(): void {
        this.state.work();
    }

}

var taro: Position = new Position();
taro.setState(new NormalEmployee());
taro.work();
taro.setState(new Director());
taro.work();
taro.setState(new Chief());
taro.work();