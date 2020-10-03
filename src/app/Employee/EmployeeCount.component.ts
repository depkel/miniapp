import { Component,Input,Output,EventEmitter } from '@angular/core';
@Component(
    {
        selector: 'Employee-Count',
        templateUrl:'EmployeeCount.component.html',
        styleUrls: ['EmployeeCount.component.css']
    })

export class EmployeeCountComponent {

    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
     

    @Input()
    All: number;

    @Input()
    Male: number;

    @Input()
    Female: number;

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        //console.log('onRadioButtonSelectionChange: '+ this.selectedRadioButtonValue);
    }

}