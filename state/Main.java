package state;

class Main {
    public static void main(String[] args) {
        App app = new App();
        app.setClock(18);
        app.order();
        app.setClock(11);
        app.order();
    }
}

interface State {
    abstract void doClock(App app, int hour);
    abstract String doOrder();
}

/* 日中の状態 */
class DayState implements State {

    /* シングルトン インスタンスを格納するフィールドとインスタンスを取得するメソッドをstatic コンストラクタをprivateにする */
    static DayState myIns = null;
    private DayState() {}

    static DayState getInstance() {
        if (DayState.myIns == null) {
            DayState.myIns = new DayState();
        }
        return DayState.myIns;
    }

    /* 時刻が5時以前もしくは17時以降なら、Contextに状態を日没に切り替えさせる。 */
    public void doClock(App app, int hour) {
        if (hour < 5 || hour > 17) {
            app.changeState(NightState.getInstance());
        }
    }

    public String doOrder() {
        return "ランチセット";
    }

}

/* 日没の状態 */
class NightState implements State {

    static NightState myIns = null;
    private NightState() {}

    static NightState getInstance() {
        if (NightState.myIns == null) {
            NightState.myIns = new NightState();
        }
        return NightState.myIns;
    }

    public void doClock(App app, int hour) {
        if (hour > 5 && hour < 17) {
            /* 時刻が5時以降かつ17時以前なら、Contextに状態を日中に切り替えさせる。 */
            app.changeState(DayState.getInstance());
        }
    }

    public String doOrder() {
        return "ディナーセット";
    }

}

/* Context */
class App {

    State state;

    App() {
        this.state = DayState.getInstance();
    }

    public void setClock(int hour) {
        this.state.doClock(this, hour);
    }

    void changeState(State state) {
        this.state = state;
    }

    void order() {
        System.out.println("この時間は" + this.state.doOrder() +  "の提供となります。");
    }

}