/* itaratorパターン */
var Student = /** @class */ (function () {
    function Student(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getSex = function () {
        return this.sex;
    };
    return Student;
}());
var StudentList = /** @class */ (function () {
    function StudentList(students) {
        this.students = students;
    }
    StudentList.prototype.add = function (newStudent) {
        this.students.push(newStudent);
    };
    return StudentList;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.createStudentList = function () {
    };
    Teacher.prototype.callStudents = function () {
    };
    return Teacher;
}());
var student_1 = new Student("yamada taro", 1);
console.log(student_1.getName());
