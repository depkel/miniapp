import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySimpleComponantComponent,mysecondComponent } from './Mysimple-componant/Mysimple-componant.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './Employee/Employee-List.component';
import { EmployeeCountComponent } from './Employee/EmployeeCount.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { HomeComponent } from './Home/Home.component';
import { PageNotFoundComponent } from './Home/PageNotFound.component';
import { SimpleComponent } from './Others/Simple.component';
import { EmployeeService } from './Employee/Employee.service';
import { TestModule } from './Test.module';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './topbar/topbar.component';
import { CreateEmployeeComponentComponent } from './create-employee-component/create-employee-component.component';
import {NgForm} from '@angular/forms';

/* const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/Id', component: EmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]; */

@NgModule({
  declarations: [
    AppComponent,
    MySimpleComponantComponent
    ,mysecondComponent
    , EmployeeListComponent, EmployeeComponent, 
    EmployeeCountComponent,HomeComponent,PageNotFoundComponent,SimpleComponent
    ,TopBarComponent, CreateEmployeeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TestModule
    ,HttpClientModule
  ],
  exports: [RouterModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
