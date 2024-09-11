import { Component } from "@angular/core";

@Component({
    selector:'app-dragontiger',
    templateUrl:'./tigergradon.component.html',
    styleUrls:['./tigergradon.component.css']
})

export class DragonTiger{

    selectedAmount: number=50;

    /**slection of amount */

    selectAmount(value:any){
        this.selectedAmount = value;
        console.log(value);
        
    }

}