import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DragonTiger } from "./pages/TigerDragon/tigergradon.component";

const router: Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'dragon-tiger',
        component:DragonTiger
    }
]

@NgModule({
    imports:[RouterModule.forChild(router)],
    exports:[RouterModule]
})


export class UserRoutermodule{}