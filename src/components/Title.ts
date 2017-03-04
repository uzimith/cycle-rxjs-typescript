import * as d from "@cycle/dom";
import Actions from "../actions";

export default function Title(text: string, actions: Actions): d.VNode {
    return d.h2(String(text));
}
