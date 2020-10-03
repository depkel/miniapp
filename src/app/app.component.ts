import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-top-bar></app-top-bar>  
  <br>
      <div style="padding:1px">
        <ul class="nav nav-tabs">
        <li routerLinkActive="active"><a routerLink="home">Home</a></li>
        <li routerLinkActive="active"><a routerLink="employees">Employees</a></li>
        
        </ul>
        <br>
        <router-outlet></router-outlet>
      </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'My mini App';
}
