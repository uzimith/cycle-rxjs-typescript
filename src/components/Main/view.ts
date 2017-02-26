import { Observable } from "rxjs";
import { div, label, input, h2, VNode  } from "@cycle/dom";
import { States, Sinks, Props } from ".";

export default function view(states$: States, props: Props, vnodes$: Observable<{[name: string]: VNode}>): Sinks {
    const vdom$ = Observable.combineLatest(states$, vnodes$)
    .map(([states, vnodes]) => (
        div([
            vnodes.heightSlider,
            vnodes.weightSlider,
            h2("BMI is " + states.bmi),
        ])
    ));
    return {
        DOM: vdom$,
    };
}
