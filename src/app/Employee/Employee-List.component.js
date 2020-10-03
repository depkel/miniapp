"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Employee_service_1 = require("./Employee.service");
var UserPreferences_service_1 = require("../Employee/UserPreferences.service");
var EmployeeListComponent = (function () {
    //Dependency injection in action 
    function EmployeeListComponent(_EmpService, _UserPrefService) {
        this._EmpService = _EmpService;
        this._UserPrefService = _UserPrefService;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = "Loading data please wait...";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._EmpService.getEmployee().subscribe(function (EmployeeData) { return _this.employees = EmployeeData; }, function (error) {
            _this.statusMessage = "Problem with the service pls try later";
            console.error(error);
        });
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.GetAllEmployeeCount = function () {
        //console.log('Total:'+ this.employees.length);
        return this.employees.length;
    };
    EmployeeListComponent.prototype.GetMaleEmployeeCount = function () {
        //console.log('Males'+ this.employees.filter(e => e.gender === "male").length);
        return this.employees.filter(function (e) { return e.gender === "male"; }).length;
    };
    EmployeeListComponent.prototype.GetFemaleEmployeeCount = function () {
        //console.log('Females' + this.employees.filter(e => e.gender === "female").length);
        return this.employees.filter(function (e) { return e.gender === "female"; }).length;
    };
    Object.defineProperty(EmployeeListComponent.prototype, "color", {
        get: function () {
            return this._UserPrefService.colorPreference;
        },
        set: function (value) {
            this._UserPrefService.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'List-Employee',
        templateUrl: 'app/Employee/Employee-List.component.html',
        styleUrls: ['app/Employee/EmployeeList.component.css'],
    }),
    __metadata("design:paramtypes", [Employee_service_1.EmployeeService, UserPreferences_service_1.userPreferenceService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=Employee-List.component.js.map