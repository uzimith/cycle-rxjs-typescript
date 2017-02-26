import {Subject} from "rxjs/Rx";

interface ActionOpitons {
    debug?: boolean;
}

export function makeActionsDriver(actions: {[name: string]: Subject<any>}, options: ActionOpitons = {}) {
    return () => {
        Object.keys(actions).map((name) => {
            actions[name] = new Subject();
            if (options.debug) {
                actions[name].subscribe( (payload) => console.log(`[${name}]`, payload));
            }
        });
        return actions;
    };
}
