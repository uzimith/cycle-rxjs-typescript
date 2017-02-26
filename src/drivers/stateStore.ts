import {adapt} from "@cycle/run/lib/adapt";
import xs from "xstream";
import {fromJS} from "immutable";

export function makeStateStoreDriver(initialStates: any = {hoge: "aaa", todos: ["server render"]}) {
    return (incoming$) => {
        const $outgoing = incoming$
            .fold((states, reducer) => reducer(states), fromJS({}))
            .debug((x) => console.log(x.toJS()))
        ;
        return adapt($outgoing);
    };
}
