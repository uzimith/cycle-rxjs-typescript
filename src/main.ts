import Cycle from "@cycle/rxjs-run";
import {Observable} from "rxjs/Rx";
import {makeDOMDriver} from "@cycle/dom";
import Main from "./components/Main";
import * as app_styles from "./app.css";

app_styles;

Cycle.run(Main, {
    DOM: makeDOMDriver("#app"),
});
