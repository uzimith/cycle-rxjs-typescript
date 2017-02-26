import {Observable} from "rxjs";
import {Actions, States, Props} from ".";

function bmi(weight: number, height: number): number {
    const heightMeters = height * 0.01;
    return Math.round(weight / (heightMeters * heightMeters));
}

export default function model(actions$: Actions, props: Props): States {
    const height$ = actions$.changeHeight$;
    const weight$ = actions$.changeWeight$;

    return Observable.combineLatest(height$, weight$)
    .do((x) => console.log(x))
    .map(([height, weight]) => {
        return {bmi: bmi(weight, height)};
    });
}
