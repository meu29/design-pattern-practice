var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, grade, password) {
        this.license = true;
        this.name = name;
        this.grade = grade;
        this.password = password;
    }
    Student.prototype.changePassword = function (new_password) {
        this.password = new_password;
        console.log("新しいパスワード: " + this.password);
    };
    Student.prototype.addGrade = function () {
        this.grade += 1;
        console.log(this.grade.toString() + "年生に進級");
    };
    Student.prototype.callAddGrade = function () {
        this.addGrade();
    };
    return Student;
}());
var taro = new Student("taro", 1, "raspberry");
console.log(taro.name);
console.log(taro.grade);
/* passwordはprivateプロパティなのでクラスの外から参照できない <=> public */
/* Property 'password' is private and only accessible within class 'Student' */
//console.log(taro.password);
/* この場合はクラスのメソッドから参照しているのでOK */
taro.changePassword("banana");
/* addGradeメソッドはprivateメソッドなのでクラスの外から呼び出せない */
/* Property 'addGrade' is private and only accessible within class 'Student' */
//taro.addGrade();
/* メソッドを呼び出すpublicメソッドから実行しているのでOK */
taro.callAddGrade();
var GradeCommittee = /** @class */ (function (_super) {
    __extends(GradeCommittee, _super);
    function GradeCommittee(name, grade, password) {
        /* 親クラスのconstructorを実行 */
        return _super.call(this, name, grade, password) || this;
    }
    return GradeCommittee;
}(Student));
var ziro = new GradeCommittee("ziro", 2, "hogehoge");
ziro.changePassword("fugafuga");
ziro.callAddGrade();
/* Property 'license' is protected and only accessible within class 'Student' and its subclasses */
//console.log(ziro.license);
