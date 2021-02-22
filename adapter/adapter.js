/* アダプター */
/* tsc adapter.ts */
/* node adapter.js */
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
    function Student() {
    }
    Student.prototype.enjoyWithAllClassmate = function () {
        console.log("みんなで楽しむ");
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.main = function () {
        var student_1 = new NewStudent();
        student_1.enjoyWithAllClassmate();
    };
    return Teacher;
}());
var NewStudent = /** @class */ (function (_super) {
    __extends(NewStudent, _super);
    function NewStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewStudent.prototype.organizeClass = function () {
        this.enjoyWithAllClassmate();
    };
    return NewStudent;
}(Student));
var teacher = new Teacher();
teacher.main();
