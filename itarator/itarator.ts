/* itaratorパターン */
/*「Iterator パターンは、要素の集まりを保有するオブジェクトの各要素に順番にアクセスする方法を提供するためのパターンです。」*/

/*
tsc itarator.ts
node itarator.js
*/

class Student { /* implements StudentType { */

    name: string;
    sex: number;

    constructor(name: string, sex: number) {
        this.name = name;
        this.sex = sex;
    }

    getName(): string {
        return this.name;
    }

    getSex(): number {
        return this.sex;
    }

}

/* Student型を作成 */
interface StudentType {
    name: string;
    sex: number;
}

class StudentList {

    students: Array<StudentType>

    constructor(students: Array<StudentType>) {
        this.students = students;
    }

    add(newStudent): void {
        this.students.push(newStudent);
    }

}

class Teacher {

    createStudentList(): void {

    }

    callStudents(): void {

    }

}

var student_1 = new Student("yamada taro", 1);
console.log(student_1.getName());