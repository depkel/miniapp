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
var UserPreferences_service_1 = require("../Employee/UserPreferences.service");
var HomeComponent = (function () {
    function HomeComponent(_UserPrefService) {
        this._UserPrefService = _UserPrefService;
    }
    Object.defineProperty(HomeComponent.prototype, "color", {
        get: function () {
            return this._UserPrefService.colorPreference;
        },
        set: function (value) {
            this._UserPrefService.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: "<b>This is home component</b>\n                <div>\n                <input type='text' [(ngModel)]='color' [style.background]='color'/>\n                </div>"
    }),
    __metadata("design:paramtypes", [UserPreferences_service_1.userPreferenceService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=Home.component.js.map