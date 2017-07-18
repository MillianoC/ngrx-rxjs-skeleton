import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeActions } from "./home.actions";
import { HomeComponent } from "./home.component";
import { HomeRoutes } from "./home.routes";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutes,
        SharedModule
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    providers: [ HomeActions ]
})
export class HomeModule {}
