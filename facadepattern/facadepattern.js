/* ファサード */
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
    function Student(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.getStudentInfo = function () {
        console.log(this.name + "は" + this.grade.toString() + "年生です");
    };
    return Student;
}());
var ClassCommittee = /** @class */ (function (_super) {
    __extends(ClassCommittee, _super);
    function ClassCommittee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassCommittee.prototype.getStudentInfo = function () {
        console.log(this.name + "は" + this.grade.toString() + "年生で学級委員です");
    };
    return ClassCommittee;
}(Student));
var Parent = /** @class */ (function () {
    function Parent(name, child_name) {
        this.name = name;
        this.child_name = child_name;
    }
    Parent.prototype.getParentInfo = function () {
        console.log(this.name + "は" + this.child_name + "の親です");
    };
    return Parent;
}());
/* 処理を依頼する窓口となるクラス */
var Facade = /** @class */ (function () {
    function Facade() {
    }
    Facade.prototype.facadeMethod = function () {
        new Student("yoshida taro", 2).getStudentInfo();
        new ClassCommittee("tanaka ziro", 3).getStudentInfo();
        new Parent("oonishi saburo", "oonishi hanako").getParentInfo();
    };
    return Facade;
}());
var facade = new Facade();
/* 依頼 */
facade.facadeMethod();
