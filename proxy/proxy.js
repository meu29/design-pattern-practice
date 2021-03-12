var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.proxy = new UserProxy();
    }
    User.prototype.play = function (music_title) {
        if (this.proxy.checkPremium(this.name) == true) {
            console.log("youtube musicで" + music_title + "を再生します");
        }
        else {
            console.log("youtubeへのプレミアム登録が必要です");
        }
    };
    return User;
}());
var UserProxy = /** @class */ (function () {
    function UserProxy() {
    }
    UserProxy.prototype.checkPremium = function (name) {
        return name == "taro";
    };
    return UserProxy;
}());
var user1 = new User("taro");
user1.play("iron lotus");
var user2 = new User("ziro");
user2.play("children of the city");
