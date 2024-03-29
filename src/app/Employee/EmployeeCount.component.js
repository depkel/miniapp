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
var EmployeeCountComponent = (function () {
    function EmployeeCountComponent() {
        this.selectedRadioButtonValue = 'All';
        this.countRadioButtonSelectionChanged = new core_1.EventEmitter();
    }
    EmployeeCountComponent.prototype.onRadioButtonSelectionChange = function () {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        //console.log('onRadioButtonSelectionChange: '+ this.selectedRadioButtonValue);
    };
    return EmployeeCountComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], EmployeeCountComponent.prototype, "countRadioButtonSelectionChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "All", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "Male", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EmployeeCountComponent.prototype, "Female", void 0);
EmployeeCountComponent = __decorate([
    core_1.Component({
        selector: 'Employee-Count',
        templateUrl: 'app/Employee/EmployeeCount.component.html',
        styleUrls: ['app/Employee/EmployeeCount.component.css']
    })
], EmployeeCountComponent);
exports.EmployeeCountComponent = EmployeeCountComponent;
//# sourceMappingURL=EmployeeCount.component.js.map