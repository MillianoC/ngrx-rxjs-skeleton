import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { go } from "@ngrx/router-store";

import { AppState } from "../../state/reducers";
import { SampleActions } from "./sample.actions";

@Component ({
    templateUrl: "sample.component.html",
    styleUrls: [ "sample.component.scss" ]
})

export class SampleComponent implements OnInit {

    constructor (private actions: SampleActions, private store: Store<AppState>) {}

    ngOnInit() {
        console.log("Init sample.component");
    }
}
