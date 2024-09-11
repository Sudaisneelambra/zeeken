import { Component } from "@angular/core";

@Component({
    selector:'app-dragontiger',
    templateUrl:'./tigergradon.component.html',
    styleUrls:['./tigergradon.component.css']
})

export class DragonTiger{

    selectedAmount: number=50;

    dragonAmt:number=0
    tieAmt:number=0
    tigerAmt:number=0

    /**slection of amount */

    selectAmount(value:any){
        this.selectedAmount = value;
        console.log(value);
        
    }

    /**dragon click */

    dragonClick(amt:any){
        const demomony =this.dragonAmt
        this.dragonAmt = demomony+amt;
    }

    tieClick(amt:any){
        const demomony =this.tieAmt
        this.tieAmt = demomony+amt;
    }

    tigerClick(amt:any){
        const demomony =this.tigerAmt
        this.tigerAmt = demomony+amt;
    }

}