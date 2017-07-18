import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SampleActions } from "./sample.actions";
import { SampleComponent } from "./sample.component";
import { SampleRoutes } from "./sample.routes";

@NgModule({
    imports: [
        CommonModule,
        SampleRoutes
    ],
    declarations: [ SampleComponent ],
    exports: [ SampleComponent ],
    providers: [ SampleActions ]
})
export class SampleModule {}
