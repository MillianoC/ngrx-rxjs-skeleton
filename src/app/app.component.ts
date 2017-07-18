import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../state";
import { AppActions } from "./app.actions";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private store: Store<AppState>,
        private actions: AppActions
    ) { }

    ngOnInit() {
        console.log('App Component Initialized');
    }
}
