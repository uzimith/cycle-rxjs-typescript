import {Observable} from "rxjs";
import {Actions, States, Props} from ".";

export default function model(actions$: Actions, props: Props): States {
    const value$ = actions$.slide$.startWith(props.value)
    ;
    return value$.map((value) => {
        return {value};
    });
}
