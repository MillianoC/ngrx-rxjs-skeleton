import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SampleComponent } from "./sample.component";

const sampleRoutes: Routes = [
    { path: "sample", component: SampleComponent }
];

@NgModule ({
    imports: [ RouterModule.forChild(sampleRoutes) ],
    exports: [ RouterModule ]
})

export class SampleRoutes {}
