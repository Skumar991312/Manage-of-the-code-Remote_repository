var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentGrade = function () {
        if (this.StudentMarks >= 75) {
            return "A";
        }
        else if (this.StudentMarks >= 65 && this.StudentMarks < 60) {
            return "B";
        }
        else {
            return "C";
        }
    };
    return Student;
}());
var s = new Student();
s.StudentName = "sandeep";
s.StudentMarks = 50;
s.StudentRank = 3;
console.log(s.getStudentGrade());
var s1 = new Student();
s1.StudentName = "Ramu";
s1.StudentMarks = 90;
s1.StudentRank = 2;
console.log("Grade ::" + s1.getStudentGrade());
