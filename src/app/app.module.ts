// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from "@ngrx/store";
import { RouterStoreModule } from "@ngrx/router-store";

// Custom Common Imports
import { AppRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { AppActions } from "./app.actions";
import { rootReducer } from "../state";

// Custom Project Specific Imports
import { PagesModule } from "../pages/pages.module";
import { SharedModule } from "../shared/shared.module";
import { ServicesModule } from "../services/services.module"
import { AppEffects } from "../state/effects";

// This is where we setup our main app module
// All other modules will eventually end up here
@NgModule({
    // Declarations are where we declare Components, Directives, Pipes
    declarations: [ AppComponent ],

    // Imports is where we bring in other modules
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutes,
        ServicesModule,
        PagesModule,
        SharedModule,
        // Setup ngrx store, providing the root reducer
        // used to manage state / process actions
        StoreModule.provideStore(rootReducer),
        RouterStoreModule.connectRouter(),
        AppEffects
    ],

    // Providers are where we declare our services, anything @Injectable
    providers: [ AppActions ],

    // Only on root module, The component we use to bootstrap the angular app
    // Angular will look for this components selector in the DOM, and instantiate this component.
    // If it is not found, the angular app never runs.
    bootstrap: [ AppComponent ]
})
export class AppModule { }
