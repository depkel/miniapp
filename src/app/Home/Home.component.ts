import { Component } from '@angular/core';
import { userPreferenceService } from '../Employee/UserPreferences.service'; 

@Component({
    template: `<b>This is home component</b>
                <div>
                <input type='text' [(ngModel)]='color' [style.background]='color'/>
                </div>`
})

export class HomeComponent {
   

    constructor(private _UserPrefService: userPreferenceService) {
        
    }

    get color():string {
        return this._UserPrefService.colorPreference;
    }

    set color(value:string) {
         this._UserPrefService.colorPreference=value;
    }
}