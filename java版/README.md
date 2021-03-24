Main(2).java -> java言語で学ぶデザインパターン入門 徹底攻略の時点で理解できたものはやらない<br>
MainClass.java -> javaデザインパターン徹底攻略<br>

AbstractFactory Prototype Iteratorがまだ<br><br>

・String[] argsの中身はコマンドライン引数<br> 
(例)java java版/その他/TestClass.java 1 "あああ"<br>
->System.out.println(args[0]); => 1 System.out.println(args[1]); => "あああ"<br><br>

・呼び出したいクラスはクラスの先頭に書く<br>
java java版/その他/TestClass.java -> TestClassクラスをクラスの先頭に書く<br>
UserクラスをTestClassより前に書いてしまうとエラー<br><br>

Cannot instantiate the type クラス名 => そのクラスが抽象クラスなのでインスタンスを作れない<br><br> 

String[] array = new String[1]; => 文字列の要素を持つ長さ1の配列<br>
array.locker[0] = "<<文字列>>";<br><br>

リストの作成 => ArrayList<要素の型> リスト名 = new ArrayList<要素の型>();<br>
リストからの要素の取り出し => リスト名.get(i);<br>
要素の追加 => リスト名.set(値); もしくはリスト名.set(位置, 値)<br>
既に要素が存在する位置を指定すると更新される<br>
要素数 => リスト名.size()<br>
要素の削除 => リスト名.remove(要素); <br><br>

エラー: identifierがありません => 予約語を変数名にしてしまっているのが原因 String charなど<br><br>