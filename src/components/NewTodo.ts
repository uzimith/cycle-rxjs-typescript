import * as d from "@cycle/dom";
import Todo from "../models/Todo";
import Actions from "../actions";

export default function NewTodo(newTodo: Todo, actions: Actions): d.VNode {
    const addTodo = (event) => {
        event.preventDefault();
        actions.addTodo.next();
    };
    const updateNewTodoTitle = (event) => {
        actions.updateNewTodoTitle.next(event.target.value);
    };
    return d.form({on: {submit: addTodo}}, [
        d.input({props: {value: newTodo.title}, on: {change: updateNewTodoTitle}}),
    ]);
}
