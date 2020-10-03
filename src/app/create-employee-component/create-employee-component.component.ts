import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'; 
import { IEmployee } from '../Employee/Employee';
import { EmployeeService } from '../Employee/Employee.service';
import { NgForm }  from '@angular/forms';

@Component({
  selector: 'app-create-employee-component',
  templateUrl:'create-employee-component.html'
  , styleUrls: ['create-Employee.component.css']
})
export class CreateEmployeeComponentComponent implements OnInit {
  employee:IEmployee;

  constructor(public EmpService:EmployeeService) {
    this.employee.firstname="deepak";
    this.employee.lastname="kelath";
    this.employee.salary=101;
   }

  ngOnInit(): void {

  }
  SubmitEmployee(empForm:NgForm):void
  {
    console.log(empForm.value);

  }
 /*  OnBackButtonClick(): void {
    this._router.navigate(['/employees']);
    
} */

}
