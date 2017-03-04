import run from "@cycle/rxjs-run";
import {makeDOMDriver} from "@cycle/dom";
import {createStore} from "./drivers/stateStore";
import logger from "./middlewares/logger";
import main from "./main";

import EventModule from "snabbdom/modules/eventlisteners";
import ClassModule from "snabbdom/modules/class";
import PropsModule from "snabbdom/modules/props";
import AttrsModule from "snabbdom/modules/attributes";
import StyleModule from "snabbdom/modules/style";
import DatasetModule from "snabbdom/modules/dataset";

import {List} from "immutable";
import Todo from "./models/Todo";

const {makeActionsDriver, makeStatesDriver} = createStore([logger]);

run(main, {
    DOM: makeDOMDriver("#app", {
        modules: [EventModule, ClassModule, PropsModule, AttrsModule, StyleModule, DatasetModule],
    }),
    actions: makeActionsDriver([
        "addTodo",
        "updateNewTodoTitle",
    ]),
    states: makeStatesDriver({
        todos: List.of(new Todo({title: "A"}), new Todo({title: "B"})),
        newTodo: new Todo({title: "newTodoTitle"}),
    }),
});
