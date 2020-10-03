import { Component,Input,OnChanges,SimpleChanges } from "@angular/core";

@Component
    (
        {
            selector: 'Simple',
            template: `<div class="myDivColor">You have entered:<b>{{Simple}}</b></div>`,
            styleUrls: ['./Simple.component.css']
    }
    
)

export class SimpleComponent implements OnChanges{
    @Input()
    Simple: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + "=current value:" + current + ",Previous=" + previous);
        }
    }

} 