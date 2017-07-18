import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

// Everything in Angular 2 are classes, well, most things.
// You tell Angular what each "thing" is with decorators
// This one Says that this is an Injectable (think angular 1 service).
// You pass metadata into the decorator.
@Injectable()
export class AppActions {
    // Wrap Actions in Action Creators (read: functions)
    // This avoids typos and makes your life easier and scales well
    // static CHANGE_GREETING: string = "CHANGE_GREETING";
    // changeGreeting(greeting: string): Action {
    //     return { type: AppActions.CHANGE_GREETING, payload: { greeting }};
    // }
}
