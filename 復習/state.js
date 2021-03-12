var NormalEmployee = /** @class */ (function () {
    function NormalEmployee() {
    }
    NormalEmployee.prototype.work = function () { console.log("プロジェクトの作業をします"); };
    return NormalEmployee;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.work = function () { console.log("プロジェクトの管理をします"); };
    return Director;
}());
var Chief = /** @class */ (function () {
    function Chief() {
    }
    Chief.prototype.work = function () { console.log("プロジェクト間の調整をします"); };
    return Chief;
}());
var Position = /** @class */ (function () {
    function Position() {
    }
    Position.prototype.setState = function (state) {
        this.state = state;
    };
    Position.prototype.work = function () {
        this.state.work();
    };
    return Position;
}());
var taro = new Position();
taro.setState(new NormalEmployee());
taro.work();
taro.setState(new Director());
taro.work();
taro.setState(new Chief());
taro.work();
