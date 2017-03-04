import * as d from "@cycle/dom";
import {makeReducer} from "./reducers/todo";

import Title from "./components/Title";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import * as styles from "./styles.css";

export default function main({DOM, actions, store}) {
    const reducer = makeReducer(actions);
    return {
        DOM: store
            .map((props) => (
            d.div("", {class: {[styles.app]: true}}, [
                Title("Todo List", actions),
                NewTodo(props.get("newTodo"), actions),
                TodoList(props.get("todos"), actions),
            ])
        )),
        store: reducer,
    };
}
