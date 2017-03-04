import run from "@cycle/rxjs-run";
import {makeDOMDriver} from "@cycle/dom";
import {makeStateStoreDriver} from "./drivers/stateStore";
import {makeActionsDriver} from "./drivers/actions";
import main from "./main";

import EventModule from "snabbdom/modules/eventlisteners";
import ClassModule from "snabbdom/modules/class";
import PropsModule from "snabbdom/modules/props";
import AttrsModule from "snabbdom/modules/attributes";
import StyleModule from "snabbdom/modules/style";
import DatasetModule from "snabbdom/modules/dataset";

import {List} from "immutable";
import Todo from "./models/Todo";

run(main, {
    DOM: makeDOMDriver("#app", {
        modules: [EventModule, ClassModule, PropsModule, AttrsModule, StyleModule, DatasetModule],
    }),
    actions: makeActionsDriver({
        addTodo: null,
        updateNewTodoTitle: null,
    }, {
        debug: true,
    }),
    store: makeStateStoreDriver({
        todos: List.of(new Todo({title: "A"}), new Todo({title: "B"})),
        newTodo: new Todo({title: "newTodoTitle"}),
    }),
});
