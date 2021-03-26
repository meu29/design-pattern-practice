package facade;

import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        ServerApp serverApp = new ServerApp();
        serverApp.makePage();
    }
}

/* facade(窓口)となるクラス */
/* クライアント(ここではMainクラス)の要求を受けると、定められた順番に沿って他のクラスのメソッドを実行していく */
/* ここではDBからユーザー一覧を取得 -> それを元にtableを作成という順番 */
/* クライアントからはどのようにtableが作られているかは見えなくできる */
class ServerApp {

    void makePage() {
        ArrayList<String> users = new Database().getUsers();
        System.out.println(Html.makeTable(users));
    }

}

class Database {

    ArrayList<String> users;
    
    Database() {
        this.users = new ArrayList<String>();
        this.users.add("Tanaka");
        this.users.add("Yamashita");
        this.users.add("Ono");
    }

    ArrayList<String> getUsers() {
        return this.users;
    }

}

class Html {

    static String makeTable(ArrayList<String> htmlElements) {

        String table = "<table>";

        for (int i = 0; i <= htmlElements.size() - 1; i++) {
            table += "<tr><td>" + htmlElements.get(i) + "</td></tr>";
        }

        table += "</table>";
        return table;

    }

}