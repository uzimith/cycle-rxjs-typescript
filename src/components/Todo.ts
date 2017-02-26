import * as d from "@cycle/dom";

export default function Todo(todo: string, actions): d.VNode {
    return d.div(todo);
}
