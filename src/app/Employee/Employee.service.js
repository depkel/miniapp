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
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.url = "http://localhost:56027/Api/Employees";
        //httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.headers = {
            'Content-Type': 'Application/json; charset=utf-8',
            'Accept': 'Application/json'
        };
        //console.log("new EmployeeService instance is created");
    }
    EmployeeService.prototype.getEmployee = function () {
        return this._http.get(this.url + "/GetAllEmployees")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.getEmployeeById = function (Id) {
        return this._http.get(this.url + '/GetEmployeeById/' + Id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handlePromiseError);
    };
    //createEmployee(employee: IEmployee): Observable<IEmployee> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this._http.post<IEmployee>(this.url + '/InsertEmployeeDetails/',
    //        employee, httpOptions);
    //}
    EmployeeService.prototype.updateEmployee = function (employee) {
        var header = {
            'Content-Type': 'Application/json; charset=utf-8',
            'Accept': 'Application/json'
        };
        return this._http.put(this.url + '/UpdateEmployeeDetails/', employee, this.headers)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handlePromiseError);
    };
    //deleteEmployeeById(employeeid: string): Observable<number> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this._http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
    //        httpOptions);
    //}  
    EmployeeService.prototype.handlePromiseError = function (error) {
        //console.log("inside promise error");
        console.error(error);
        throw (error);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=Employee.service.js.map