import { Action, combineReducers } from "@ngrx/store";
import { RouterState, routerReducer as router } from "@ngrx/router-store";

import { GreetingState, reducer as greeting } from "./greeting.reducer";
// Overall AppState interface.
// Basically functions as a TypeScript type
// Representing the structure of the State Object
export interface AppState {
    greeting: GreetingState;
    router: RouterState;
};

// Combine reducers takes an object of AppState key -> reducer
// Returns one reducer that delegates to all children reducers for their
// Respective piece of state.
// the greeting piece of the app state will passed to the
// greeting reducer as its state, along with the current action
export const reducer = combineReducers({
    greeting,
    router
});

// Use this in AppModule to be compatible with AOT Compilation.
export function rootReducer(state: AppState, action: Action): AppState {
    return reducer(state, action);
};
