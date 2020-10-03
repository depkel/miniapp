import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'MySimpleComponant',
  template: `
    <p>
    Hi my simple componant
    </p>
    
    <button (click)="clickme($event)">Click Me</button><br>
    FirstName <input type="text" id="txtfirstName" [(ngModel)]="firstName"/><br>
    secondName <input type="text" id="txtsecondName" [(ngModel)]="secondName"/><br>
    <button (click)="clickme2($event)">Click Me to get name</button><br>
    OnkeyUp using $event <input type="text" id="txtkeyup" (keyup)='onKeyUp($event)'/><br>
    <br>{{message}}
    
  `,
  styles: [
  ]
})
export class MySimpleComponantComponent implements OnInit {
  clicked=1;
  message1:string="type something";
  message:string = this.message1;
  firstName:string="Enter first name";
  secondName:string="Enter last name";
  constructor() { }

  ngOnInit(): void {
  }
  clickme(event:any){
    this.clicked++;
    this.message = "Hai "+ this.firstName + " You clicked " + this.clicked + " times" + event.target.tagName;
  }
  clickme2(event:any){
    alert(this.getFullName());
  }
 getFullName():string{
return this.firstName + " " + this.secondName;
 }
 
 onKeyUp(event:any){
  if(event.target.value != "")
  {
    this.message += event.target.value + '|'; 
  } 
else
{
  this.message=this.message1;
}

}
}

@Component({
selector:'myseccomponant',
template:`
<button (click)="toggleDetails()">
    {{show?'Hide':'Show'}} details
</button>
<div class="myDiv" *ngIf="show">
<input type="text" id="txtkeyup2" (keyup)='onKeyUp($event)'/><br>
<br>hai {{message2}}
<div>
  `,styleUrls: ['Mysimple-componant.component.css']
})

export class mysecondComponent implements OnInit {
  message2:string="";
  show:boolean=false;
constructor() {}

  ngOnInit(): void {}
  onKeyUp(event:KeyboardEvent){
    this.message2 += (event.target as HTMLInputElement).value + '|';
  }
  toggleDetails(): void {
    this.show = !this.show;
    this.message2="";
}
}

