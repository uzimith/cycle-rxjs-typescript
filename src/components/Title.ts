import * as d from "@cycle/dom";

export default function Title(text: string, actions): d.VNode {
    return d.h2(String(text));
}
