import * as d from "@cycle/dom";

export default function NewTodo(title: string, actions): d.VNode {
    const sendNewTodo = (text: string) => {
        actions.addTodo.next(text);
    };
    const updateNewTodoTitle = (event) => {
        actions.updateNewTodoTitle.next(event.target.value);
    };
    return d.form({on: {submit: [sendNewTodo, title], click: [sendNewTodo, title]}}, [
        d.input({attrs: {value: title}, on: {change: updateNewTodoTitle}}),
    ]);
}
