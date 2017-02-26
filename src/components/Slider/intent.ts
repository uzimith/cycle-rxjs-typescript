import {Observable} from "rxjs";
import {DOMSource} from "@cycle/dom/rxjs-typings";
import {VNode} from "@cycle/dom";
import {Props, Actions} from ".";

export default function intent(dom$: DOMSource, props$: Props): Actions {
    return {
        slide$: dom$.select("input[type=range]")
        .events("input").map((ev) => Number((ev.target as HTMLInputElement).value)),
    };
}
