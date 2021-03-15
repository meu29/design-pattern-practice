package java版.その他;

class MainClass {

    public static void main(String[] args) {
        
        User user1 = new User("@taro312", 334668);
        System.out.println(user1.userId);
        user1.changePasscode(334667, 112233);
        user1.changePasscode(334668, 112233);

        Administrator user2 = new Administrator("@ziro4491", 37564);
        user2.changeUserId("@saburo888");
        System.out.println(user2.userId);
        user2.changePasscode(6256);

    }

}

class User {

    public String userId;
    protected Number passcode;

    /* コンストラクタ -> クラスと同じ名前の関数 */
    User(String userId, Number passcode) {
        this.userId = userId;
        this.passcode = passcode;
    }

    void changePasscode(Number old_passcode, Number new_passcord) {

        if (old_passcode == this.passcode) {
            this.passcode = new_passcord;
            System.out.println("パスコードを" + this.passcode.toString() + "に変更しました");
        } else {
            System.out.println("パスコードが違います");
        }
    
    }


}

class Administrator extends User {

    Administrator(String userId, Number passcode) {
        super(userId, passcode);
    }

    /* 子クラスだけが持つクラス */
    void changeUserId(String newUserId) {
        this.userId = newUserId;
    }

    /* オーバーライド(親クラスのメソッドを再定義 親クラスのメソッドには影響なし) */
    /* 古いパスワードの認証なしに新しくパスワードを設定できるようにする */
    void changePasscode(Number new_passcord) {
        /* passcodeがprivateメンバならthis.passcodeはできない */
        this.passcode = new_passcord;
        System.out.println("パスコードを" + this.passcode.toString() + "に変更しました");
    }

}
