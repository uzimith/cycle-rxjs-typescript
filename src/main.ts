import run from "@cycle/rxjs-run";
import eventlisteners from "snabbdom/modules/eventlisteners";
import {makeDOMDriver, div} from "@cycle/dom";
import {makeStateStoreDriver} from "./drivers/stateStore";
import {makeActionsDriver} from "./drivers/actions";
import {makeReducer} from "./reducers/todo";

import Title from "./components/Title";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function Main({DOM, actions, store}) {
    const reducer = makeReducer(actions);
    return {
        DOM: store.map((props) => (
            div("", [
                Title("Todo List"),
                NewTodo(props.get("newTitle"), actions),
                TodoList(props.todos, actions),
            ])
        )),
        store: reducer,
    };
}

run(Main, {
    DOM: makeDOMDriver("#app", {
        modules: [eventlisteners],
    }),
    actions: makeActionsDriver({
        addTodo: null,
        updateNewTodoTitle: null,
    }, {
        debug: true,
    }),
    store: makeStateStoreDriver({}),
});
