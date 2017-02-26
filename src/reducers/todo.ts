import {Observable} from "rxjs/Rx";

export function makeReducer(actions) {
    const updateNewTodoTitle = actions.updateNewTodoTitle
        .map((title) => state => state.set("newTodoTitle", title))
        .startWith(state => state.set("newTodoTitle", "hi"))
    ;

    const addTodo = actions.addTodo
        .map(() => state => state.updateIn(["todos"], todos =>
            todos.unshift(state.get("newTodoTitle"))).set("newTodoTitle", ""))
            .startWith(state => state.set("todos", ["aaa"]))
            ;

    return Observable.merge(
        updateNewTodoTitle,
        addTodo,
    );
}
