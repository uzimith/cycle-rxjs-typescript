import {Observable, Subject} from "rxjs/Rx";
import xs from "xstream";
import * as Immutable from "immutable";

export function createStore(middlewares) {
    const makeActionsDriver = (actionNames: string[]) => {
        return () => {
            const subjects = {};
            actionNames.forEach((name) => {
                const subject = new Subject();
                const action = subject.map((payload) => ({type: name, payload}));
                subjects[name] = middlewares.map((middleware) => middleware.patchAction)
                    .reduce((actions, patch) => patch(actions), action)
                ;
            });
            return subjects;
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
