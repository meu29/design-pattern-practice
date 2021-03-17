https://www.amazon.co.jp/Java%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%BE%B9%E5%BA%95%E6%94%BB%E7%95%A5-%E6%A8%99%E6%BA%96%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%82%BA%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA-%E6%97%A5%E7%AB%8B%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E9%83%A8/dp/4774115797<br>

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