import {Observable, Subject} from "rxjs/Rx";
import {Map} from "immutable";
import Todo from "../models/Todo";
import Actions from "../actions";

export function makeReducer(actions: Actions) {
    const updateNewTodoTitle = actions.updateNewTodoTitle
        .map((title) => state => {
            return state
                .updateIn(["newTodo"], todo => todo.set("title", title));
        })
    ;

    const addTodo = actions.addTodo
        .map(() => state => {
            return state
                .updateIn(["todos"], todos => todos.unshift(state.get("newTodo")))
                .set("newTodo", new Todo());
        })
    ;

    return Observable.merge(
        updateNewTodoTitle,
        addTodo,
    );
}

