import {Observable} from "rxjs";
import {div, label, input, span,  h2, VNode} from "@cycle/dom";
import {States, Sinks, Props} from ".";

export default function view(states$: States, props: Props): Sinks {
    const vdom$ = states$
    .map((states) => (
        div(".labeled-slider", [
            span(".label", props.label + " " + states.value + props.unit),
            input(".slider", { attrs: {type: "range", min: props.min, max: props.max, value: states.value} }),
        ])
    ));
    return {
        DOM: vdom$,
        value: states$.map((states) => states.value),
    };
}
