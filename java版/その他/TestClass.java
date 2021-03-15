package java版.その他;

class TestClass {

    public static void main(String[] args) {
        
        User user1 = new User("@taro312", 334668);
        System.out.println(user1.userId);
        user1.changePasscode(334667, 112233);
        user1.changePasscode(334668, 112233);
        
    }

}

class User {

    public String userId;
    /* privateメンバなのでクラス外からの参照不可 */
    private Number passcode;

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
