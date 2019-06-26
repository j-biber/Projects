const dataModule = (function () {

    const exams = {
        examsPassed: [],
        examsFailed: []
    }

    function Subject(name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function () {
        return this.name.substring(0, 3).toUpperCase();
    }

    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Student.prototype.getStudentData = function () {
        return `${this.firstName} ${this.lastName}`;
    }

    function Exam(subjectObj, studentObj, grade) {
        this.subject = subjectObj;
        this.student = studentObj;
        this.grade = grade;
    }

    Exam.prototype.getExamInfo = function () {
        const subjectData = this.subject.getSubjectName();
        const studentData = this.student.getStudentData();
        return `${subjectData}-${studentData}`;
    }

    Exam.prototype.hasPassed = function () {
        // if (this.grade > 5) {
        //     return true;
        // } else {
        //     return false;
        // }
        return this.grade > 5
    }

    function createExam(dataObj, exams) {
        const { subject, student, grade } = dataObj;
        const subjectObj = new Subject(subject);
        const studentObj = new Student(...student.trim().split(/\s+/g));
        const exam = new Exam(subjectObj, studentObj, grade);
        if (exam.hasPassed()) {
            exams.examsPassed.push(exam);
        } else {
            exams.examsFailed.push(exam);
        }

        return exam;
    }

    return {
        exams: exams,
        createExam: createExam
    }

})();