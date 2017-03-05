import {Subject} from "rxjs/Rx";

export default class Actions {
    public addTodo: Subject<any>;
    public updateNewTodoTitle: Subject<any>;

    constructor() {
        this.addTodo = null;
        this.updateNewTodoTitle = null;
    }
}
