import * as d from "@cycle/dom";
import Todo from "./Todo";

export default function TodoList(todos: string[], actions): d.VNode {
    return d.div(( todos || [] ).map((todo) => (Todo(todo, actions))));
}
