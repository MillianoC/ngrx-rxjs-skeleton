import { Action } from "@ngrx/store";
import { AppActions } from "../../app/app.actions";

// Define a type alias for the greeting state
// In this case, the greeting will be a string
// It could be an object, in which case GreetingState would be
// an interface describing the structure of the object
export type GreetingState = string;

// Define our initial value for the GreetingState
export const initialState: GreetingState = "Hello Ben";

// Define our reducer function
// Reducers have the form: (state, action) => state
// Actions have the form: { type: string, payload: any }
export function reducer(state: GreetingState = initialState, action: Action): GreetingState {
    // We switch on action type
    switch(action.type) {
        // Each case defines an action type
        // and what to do if the action matches that type
        // case AppActions.CHANGE_GREETING:
        //     // If action.type has the value "CHANGE_GREETING"
        //     // We grab the new greeting from the action payload
        //     // and return that as our new state
        //     return action.payload.greeting;
        // If the action.type doesn't match any other case
        // we return whatever state we were handed
        // EVERY Reducer should end with this.
        default:
            return state;
    }
}
