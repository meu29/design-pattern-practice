class User {

    name: string;
    proxy: UserProxy;

    constructor(name: string) {
        this.name = name;
        this.proxy = new UserProxy();
    }

    /* 元々はこのクラス内で判定を行っていた
    checkPremium(): boolean {
        return this.name == "taro";
    }
    */

    play(music_title: string): void {

        /* プレミアム会員かどうかの判定をproxyクラスに代わってもらう */
        if (this.proxy.checkPremium(this.name) == true) {
            console.log("youtube musicで" + music_title + "を再生します");
        } else {
            console.log("youtubeへのプレミアム登録が必要です");
        }
        
    }

}

class UserProxy {

    /* プレミアム会員がtaroしかいないと仮定する */
    checkPremium(name: string): boolean {
        return name == "taro";
    }

}

var user1 = new User("taro");
user1.play("iron lotus")
var user2 = new User("ziro");
user2.play("children of the city");

