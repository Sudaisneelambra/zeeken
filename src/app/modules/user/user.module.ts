import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { UserRoutermodule } from "./user.router.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { DragonTiger } from "./pages/TigerDragon/tigergradon.component";
import { GameNave } from "./components/gamenavbar/gamenavbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent,
        DragonTiger

    ],
    imports: [
        CommonModule,
        UserRoutermodule,
        NavbarComponent,
        GameListComponent,
        GameNave
    ],
    exports: [],
})

export class UserModule {}