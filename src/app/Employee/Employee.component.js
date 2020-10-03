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
var router_1 = require("@angular/router");
var Employee_service_1 = require("./Employee.service");
var EmployeeComponent = (function () {
    //ActivatedRoute is a service provided by Angular for receving route parameter data from URL
    function EmployeeComponent(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        //firstName: string = "Deepak";
        //lastName: string = "Kelath";
        //Gender: string = "Male";
        //Age: number = 40;
        this.columnSpan = 2;
        this.createEmployee = false;
        this.showDetails = true;
        this.statusMessage = 'Loading Data Please wait';
    }
    EmployeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var Empid = this._activatedRoute.snapshot.params['Id'];
        //console.log('Employee id to web service is '+ Empid);
        this._employeeService.getEmployeeById(Empid)
            .then(//subscribe the Observable<IEmployee> object replaced with promise<IEmployee>
        function (EmployeeData) {
            // console.log(EmployeeData.Id);
            if (EmployeeData == null) {
                //console.log("inside emp does not exist");
                _this.statusMessage = 'Employee with code does not exist';
            }
            else {
                //console.log("inside emp  exist--else" + EmployeeData.firstname);
                _this.employee = EmployeeData;
            }
        }).catch(
        //call back function for error
        function (ErrorMsg) {
            if (ErrorMsg.status == 0) {
                _this.statusMessage = "Problem with service please try later";
            }
            else {
                _this.statusMessage = ErrorMsg.status + ',' + ErrorMsg._body;
            }
            console.log(ErrorMsg._body);
        });
    };
    EmployeeComponent.prototype.OnBackButtonClick = function () {
        this._router.navigate(['/employees']);
    };
    EmployeeComponent.prototype.OnUpdateClick = function () {
        var _this = this;
        this._employeeService.updateEmployee(this.employee)
            .then(function () {
            //console.log("inside emp  exist--else" + EmployeeData.firstname);
            _this._router.navigate(['/employees']);
        });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'EmpDet',
        templateUrl: "app/Employee/Employee.component.html",
        styleUrls: ['app/Employee/Employee.component.css']
    }),
    __metadata("design:paramtypes", [Employee_service_1.EmployeeService,
        router_1.ActivatedRoute,
        router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=Employee.component.js.map