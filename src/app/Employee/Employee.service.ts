import { Injectable } from '@angular/core';
import { IEmployee } from './Employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { Observable,throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise'; 
import { map,catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

    url: string = "http://localhost:56027/Api/Employees";

     //httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     headers: any = {
    'Content-Type': 'Application/json; charset=utf-8',
         'Accept': 'Application/json'
        
    }
     employees: IEmployee[];
     formData :IEmployee;

    constructor(private _http: HttpClient) {
        console.log("new EmployeeService instance is created");
    }

    getEmployee(): Observable<IEmployee[]> {
        console.log(this.url + "/GetAllEmployees");
        return this._http.get<IEmployee[]>(this.url + "/GetAllEmployees")
        
            
    }
    

    getEmployeeById(Id:string): Observable<IEmployee> {
        return this._http.get<IEmployee>(this.url + '/GetEmployeeById/' + Id)
       
        
           }
   
    
    //createEmployee(employee: IEmployee): Observable<IEmployee> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this._http.post<IEmployee>(this.url + '/InsertEmployeeDetails/',
    //        employee, httpOptions);
    //}

 updateEmployee(employee: IEmployee): Promise<IEmployee> {
        
        const header: any = {
            'Content-Type': 'Application/json; charset=utf-8',
            'Accept': 'Application/json'
        }
        console.log(employee.Id + '' + employee.department + '' + employee.isActive + ''+ employee.photoPath);
        return this._http.put(this.url + '/UpdateEmployeeDetails/', employee,this.headers)
              //.map((response: Response) => <IEmployee>response.json())
            .toPromise()
            .catch(this.handlePromiseError);
            
    } 
    //deleteEmployeeById(employeeid: string): Observable<number> {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //    return this._http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' + employeeid,
    //        httpOptions);
    //}  

    handlePromiseError(error: Response): Promise<any> {
        console.log("inside promise error");
        console.error(error);
        throw (error);

    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

}