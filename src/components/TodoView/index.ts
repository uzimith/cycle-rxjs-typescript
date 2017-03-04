import * as d from "@cycle/dom";
import * as styles from "./styles.css";
import Todo from "../../models/Todo";
import Actions from "../../actions";

export default function TodoView(todo: Todo, actions: Actions): d.VNode {
    return d.li({class: {[styles.todo]: true} }, todo.title);
}
