import * as d from "@cycle/dom";
import * as styles from "./styles.css";
import TodoView from "../TodoView";
import Todo from "../../models/Todo";
import {List} from "immutable";

export default function TodoList(todos: List<Todo>, actions): d.VNode {
    return d.ul({class: {[styles.todo_list]: true}}, todos.map((todo) => (TodoView(todo, actions))).toJS());
}
