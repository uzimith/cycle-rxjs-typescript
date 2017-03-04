import {Observable, Subject} from "rxjs/Rx";
import xs from "xstream";
import * as Immutable from "immutable";
import Actions from "../Actions";

export function createStore(middlewares) {
    const makeActionsDriver = (actions: Actions) => {
        return () => {
            return actions.map((subject, name) => {
                const action = subject.map((payload) => ({type: name, payload}));
                return middlewares.map((middleware) => middleware.patchAction)
                    .reduce((_action, patch) => patch(_action), action)
                ;
            });
        };
    };

    const makeStatesDriver = (initialStates = {}) => {
        return (incoming$) => {
            const $outgoing = Observable.from(incoming$).startWith(x => x)
                .scan((states, reducer) => reducer(states), Immutable.fromJS(initialStates))
            ;
            return middlewares.map((middleware) => middleware.patchState)
                    .reduce((states, patch) => patch(states), $outgoing);
        };
    };
    return { makeActionsDriver, makeStatesDriver };
}
