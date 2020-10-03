import { Component,Input,OnInit } from '@angular/core';
import { Employee, IEmployee } from './Employee'; 
import { EmployeeService } from './Employee.service';
import { userPreferenceService } from '../Employee/UserPreferences.service'; 

@Component(
    {
        selector: 'List-Employee',
        templateUrl: 'Employee-List.component.html',
        styleUrls: ['EmployeeList.component.css'],
        //providers:[EmployeeService] can we locally here OR at App.Module.ts level globally   
    }
)
export class EmployeeListComponent{
    selectedEmployeeCountRadioButton: string = 'All';
    employees: IEmployee[];
    statusMessage: string = "Loading data please wait.....";
    createNew: boolean=false;
    
    
    showEmployeeList:boolean=true;

    //Dependency injection in action 
    constructor(private _EmpService: EmployeeService, private _UserPrefService: userPreferenceService) {
        console.log("new EmployeeList instance is created");
    }

    ngOnInit() {
        this._EmpService.getEmployee().subscribe((EmployeeData) => this.employees = EmployeeData,
            (error) => {
                this.statusMessage = "Problem with the service pls try later";
                console.error(error);
            });
    }
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string) :void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    GetAllEmployeeCount(): number {
        //console.log('Total:'+ this.employees.length);
        return this.employees.length;
    }
    GetMaleEmployeeCount(): number {
        //console.log('Males'+ this.employees.filter(e => e.gender === "male").length);
        return this.employees.filter(e => e.gender==="male").length;
    }
    GetFemaleEmployeeCount(): number {
        //console.log('Females' + this.employees.filter(e => e.gender === "female").length);
        return this.employees.filter(e => e.gender === "female").length;
    }

    get color(): string {
        return this._UserPrefService.colorPreference;
    }

    set color(value: string) {
        this._UserPrefService.colorPreference = value;
    }
    CreateNewEmployee():void{
    //    window.alert("create new"); 
       this.createNew=true;
       this.showEmployeeList=false;
    }

}
