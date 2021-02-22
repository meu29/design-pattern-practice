/* アダプターパターン */
/* tsc adapter.ts */
/* node adapter.js */

/* organizeClassメソッドが存在しないのでChairparson型をimplimentするとエラー */
/* Studentクラスを書き換えることなくorganizeClassメソッドを使うためには? */
class Student {

    enjoyWithAllClassmate() {
        console.log("みんなで楽しむ");
    }

}

interface Chairperson {
    organizeClass(): void
}

class Teacher {

    main(): void {
        var student_1 = new NewStudent();
        student_1.enjoyWithAllClassmate();
    }

}

/* クラスとクラス(またはインターフェース)の間に互換性を生じさせる? */
class NewStudent extends Student implements Chairperson {

    organizeClass() {
        this.enjoyWithAllClassmate();
    }

}

var teacher = new Teacher();
teacher.main();