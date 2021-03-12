/* 状態のインターフェース */
interface moodState {
    giveMoney(): number;
}

/* 状態ごとにクラスを作成 */
/* 新しい状態が必要になったら、その状態クラスを追加すれば良い */
class goodMoodState implements moodState {
    giveMoney(): number { return 1000; } 
}

class normalMoodState implements moodState {
    giveMoney(): number { return 500; } 
}

class badMoodState implements moodState {
    giveMoney(): number { return 0; } 
}

class Parent {

    state: moodState;

    setStatus(state: moodState) {
        this.state = state;
    }

    /* 状態クラスのメソッドを呼び出す */
    /* どのクラスのメソッドを呼び出すかはParentクラスのインスタンスを作成する際に決める */
    giveMoney(): void {
        console.log(this.state.giveMoney());
    }

}

var p1: Parent = new Parent();
p1.setStatus(new goodMoodState());
p1.giveMoney();
p1.setStatus(new normalMoodState());
p1.giveMoney();
p1.setStatus(new badMoodState());
p1.giveMoney();