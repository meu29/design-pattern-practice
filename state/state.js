/* 状態ごとにクラスを作成 */
var goodMoodState = /** @class */ (function () {
    function goodMoodState() {
    }
    goodMoodState.prototype.giveMoney = function () { return 1000; };
    return goodMoodState;
}());
var normalMoodState = /** @class */ (function () {
    function normalMoodState() {
    }
    normalMoodState.prototype.giveMoney = function () { return 500; };
    return normalMoodState;
}());
var badMoodState = /** @class */ (function () {
    function badMoodState() {
    }
    badMoodState.prototype.giveMoney = function () { return 0; };
    return badMoodState;
}());
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setStatus = function (state) {
        this.state = state;
    };
    /* 状態クラスのメソッドを呼び出す */
    Parent.prototype.giveMoney = function () {
        console.log(this.state.giveMoney());
    };
    return Parent;
}());
var p1 = new Parent();
p1.setStatus(new goodMoodState());
p1.giveMoney();
p1.setStatus(new normalMoodState());
p1.giveMoney();
p1.setStatus(new badMoodState());
p1.giveMoney();
