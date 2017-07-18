import { NgModule } from "@angular/core";

import { SampleModule } from "./sample/sample.module";
import { HomeModule } from "./home/home.module";



@NgModule({
    imports: [
        SampleModule,
        HomeModule
    ]
})
export class PagesModule {}
