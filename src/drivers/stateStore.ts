import {adapt} from "@cycle/run/lib/adapt";
import xs from "xstream";
import * as Immutable from "immutable";

export function makeStateStoreDriver(initialStates: any = {}) {
    return (incoming$) => {
        const $outgoing = incoming$
            .fold((states, reducer) => reducer(states), Immutable.fromJS(initialStates))
            .debug(x => console.log(x.toJS()))
        ;
        return adapt($outgoing);
    };
}

