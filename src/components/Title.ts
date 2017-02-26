import * as d from "@cycle/dom";

export default function Title(text: string): d.VNode {
    return d.h2(String(text));
}
