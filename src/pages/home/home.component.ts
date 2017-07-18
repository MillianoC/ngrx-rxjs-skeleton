import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { go } from "@ngrx/router-store";

import { AppState } from "../../state/reducers";
import { HomeActions } from "./home.actions";

@Component ({
    templateUrl: "home.component.html",
    styleUrls: [ "home.component.scss" ]
})

export class HomeComponent implements OnInit {

    constructor (
        private actions: HomeActions,
        private store: Store<AppState>,
        private router: Router
    ) {}

    ngOnInit() {
        console.log("Init home.component");
    }
}
