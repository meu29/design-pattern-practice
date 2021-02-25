/* ファサード */

class Student {

    name: string;
    grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }

    getStudentInfo(): void {
        console.log(this.name + "は" + this.grade.toString() + "年生です");
    }

}

class ClassCommittee extends Student {

    getStudentInfo(): void {
        console.log(this.name + "は" + this.grade.toString() + "年生で学級委員です");
    }

}

class Parent {

    name: string;
    child_name: string;

    constructor(name: string, child_name: string) {
        this.name = name;
        this.child_name = child_name;
    }

    getParentInfo(): void {
        console.log(this.name + "は" + this.child_name + "の親です");
    }

}

/* 処理を依頼する窓口となるクラス */
class Facade {

    facadeMethod(): void {
        /* 各クラスに処理を要請 */
        new Student("yoshida taro", 2).getStudentInfo();
        new ClassCommittee("tanaka ziro", 3).getStudentInfo();
        new Parent("oonishi saburo", "oonishi hanako").getParentInfo();
    }
    
}

var facade = new Facade();
/* 依頼 */
facade.facadeMethod();