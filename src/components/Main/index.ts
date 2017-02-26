import {Observable} from "rxjs/Rx";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import isolate from "@cycle/isolate";
import {p, VNode} from "@cycle/dom";

import Slider from "../Slider";
import intent from "./intent";
import model from "./model";
import view from "./view";

export interface Props {
    height: number;
    weight: number;
}

export interface Sources {
    DOM: DOMSource;
    props: Props;
}

export interface Actions {
    changeHeight$?: Observable<number>;
    changeWeight$?: Observable<number>;
}

export type States = Observable<{
    bmi: number;
}>;

export interface Sinks {
    DOM: Observable<VNode>;
}

export default function Main(sources: Sources): Sinks {
    const HeightSlider = isolate(Slider)({
        DOM: sources.DOM,
        props: {label: "Height", unit: "cm", min: 140, value: 170, max: 210},
    });
    const WeightSlider = isolate(Slider)({
        DOM: sources.DOM,
        props: {label: "Weight", unit: "kg", min: 40, value: 70, max: 150},
    });

    const componentsActions$ = {
        changeHeight$: HeightSlider.value,
        changeWeight$: WeightSlider.value,
    };

    const mainActions$ = intent(sources.DOM, sources.props);
    const state$ = model({...componentsActions$, ...mainActions$}, sources.props);

    const vnodes$ = Observable.combineLatest(
        HeightSlider.DOM,
        WeightSlider.DOM,
    ).map(([heightSlider, weightSlider]) => ({heightSlider, weightSlider}));
    return view(state$, sources.props, vnodes$);
}
