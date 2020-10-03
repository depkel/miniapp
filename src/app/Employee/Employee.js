"use strict";
var Employee = (function () {
    function Employee(Id, firstname, lastname, gender, salary, department, isactive, photoPath) {
        this.Id = Id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.salary = salary;
        this.department = department;
        this.isactive = isactive;
        this.photoPath = photoPath;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map