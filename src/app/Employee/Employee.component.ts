import { Component,OnInit } from '@angular/core';
import { IEmployee } from './Employee';
import { ActivatedRoute,Router } from '@angular/router'; 
import { EmployeeService } from './Employee.service'; 

@Component({
    selector: 'EmpDet', 
    templateUrl: 'Employee.component.html'
    //, styles: ['table {color: #369;font-family: Arial, Helvetica,sans-serif; font-size: medium;border-collapse: collapse;font-style:italic;}','td { border: 1px solid Green; }']
    , styleUrls: ['Employee.component.css']
})
export class EmployeeComponent implements OnInit {
     //firstName: string = "Deepak";
    //lastName: string = "Kelath";
    //Gender: string = "Male";
    //Age: number = 40;
    columnSpan: number = 2;
    createEmployee: boolean = false;
    showDetails: boolean = true;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    employee: IEmployee;
    statusMessage: string='Loading Data Please wait';
    photopath : string='D:\pictures\desert.jpeg';
    //ActivatedRoute is a service provided by Angular for receving route parameter data from URL
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router :Router) {

    }
    ngOnInit() {
         let Empid: string = this._activatedRoute.snapshot.params['Id'];

        console.log('Employee id to web service is '+ Empid);

        this._employeeService.getEmployeeById(Empid)
            .subscribe( //subscribe the Observable<IEmployee> object replaced with promise<IEmployee>
                (EmployeeData) => { //Anonymous callback function which received data from WebAPI
                   // console.log(EmployeeData.Id);
                    if (EmployeeData == null) {
                        //console.log("inside emp does not exist");
                    this.statusMessage = 'Employee with code does not exist';
                }
                    else {
                        //console.log("inside emp  exist--else" + EmployeeData.firstname);
                    this.employee = EmployeeData
                }
            } 
        );
        /* .(
            //call back function for error
            (ErrorMsg) => {
                if (ErrorMsg.status == 0) {
                    this.statusMessage = "Problem with service please try later";
                }
                else {
                   this.statusMessage = ErrorMsg.status + ',' + ErrorMsg._body;
                    
                }
                console.log(ErrorMsg._body);
            }
        );
 */
    }

    OnBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }
    OnUpdateClick(): void {
        this._employeeService.updateEmployee(this.employee)
            .then(
                () => {
                    
                        console.log(this.employee.photoPath);
                        this._router.navigate(['/employees']);
                    
                    
                }
            )
    }
    
    onSelectFile(event:any) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
            this.photopath = event.target.value;
            window.alert(event.target.value);
            console.log("current file is "+ this.photopath);

         /*  var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event) => { // called once readAsDataURL is completed
            this.photopath = event.target.result;
          } */

        }
    }

}