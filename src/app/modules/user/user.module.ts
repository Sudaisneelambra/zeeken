import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { UserRoutermodule } from "./user.router.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GameListComponent } from "./components/game-list/game-list.component";
import { DragonTiger } from "./pages/TigerDragon/tigergradon.component";

@NgModule({
    declarations: [
        HomeComponent,
        DragonTiger

    ],
    imports: [
        UserRoutermodule,
        NavbarComponent,
        GameListComponent
    ],
    exports: [],
})

export class UserModule {}