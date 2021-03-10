/* publicとprivate */
/* 修飾子がないものは全てpublicとして扱われる */

interface student {
    name: string;
    grade: number;
    password: string;
    changePassword(new_password: string): void;
    addGrade(): void;
    callAddGrade(): void;
}

class Student implements Student {

    name: string;
    grade: number;
    private password: string;
    protected license: boolean = true;

    constructor(name: string, grade: number, password: string) {
        this.name = name;
        this.grade = grade;
        this.password = password;
    }

    changePassword(new_password: string): void {
        this.password = new_password;
        console.log("新しいパスワード: " + this.password);
    }

    /* 親クラスのプライベートメソッドは子クラスでのオーバーライド不可 */
    private addGrade(): void {
        this.grade += 1;
        console.log(this.grade.toString() + "年生に進級");
    }

    callAddGrade(): void {
        this.addGrade();
    }

}

var taro = new Student("taro", 1, "raspberry");
/* publicプロパティなのでクラスの外からアクセスできる */
console.log(taro.name);
console.log(taro.grade);

/* privateプロパティなのでクラスの外から参照できない */
/* Property 'password' is private and only accessible within class 'Student' */
//console.log(taro.password);

/* この場合はクラスのメソッドから参照しているのでOK */
taro.changePassword("banana");

/* addGradeメソッドはprivateメソッドなのでクラスの外から呼び出せない */
/* Property 'addGrade' is private and only accessible within class 'Student' */
//taro.addGrade();

/* メソッドを呼び出すpublicメソッドから実行しているのでOK */
taro.callAddGrade();


class GradeCommittee extends Student implements Student {

    constructor(name: string, grade: number, password: string) {
        /* 親クラスのconstructorを実行 */
        super(name, grade, password);
    }

}

var ziro = new GradeCommittee("ziro", 2, "hogehoge");

/* 子クラスも同様 */
/* Property 'password' is private and only accessible within class 'Student'. */
//console.log(ziro.password);
ziro.changePassword("fugafuga");
ziro.callAddGrade();

/* 子クラスからも参照できるprivateプロパティ(メソッド)がprotected? */