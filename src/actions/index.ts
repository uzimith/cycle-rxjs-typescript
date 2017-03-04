import {Subject} from "rxjs/Rx";
import {Record} from "immutable";

interface Params {
    addTodo: Subject<any>;
    updateNewTodoTitle: Subject<any>;
}

export default class Actions extends Record({
    addTodo: new Subject(),
    updateNewTodoTitle: new Subject(),
}) {
    public addTodo: Subject<any>;
    public updateNewTodoTitle: Subject<any>;

    constructor(params?: Params) {
        params ? super(params) : super();
    }
}
