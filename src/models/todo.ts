import {Record} from "immutable";

interface Params {
    title: string;
}

export default class Todo extends Record({
    title: "",
}) {
    public title: string;

    constructor(params?: Params) {
        params ? super(params) : super();
    }
}
