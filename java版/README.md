・String[] argsの中身はコマンドライン引数<br>
(例)java java版/その他/TestClass.java 1 "あああ"<br>
->System.out.println(args[0]); => 1 System.out.println(args[1]); => "あああ"<br><br>

・呼び出したいクラスはクラスの先頭に書く<br>
java java版/その他/TestClass.java -> TestClassクラスをクラスの先頭に書く<br>
UserクラスをTestClassより前に書いてしまうとエラー<br><br>