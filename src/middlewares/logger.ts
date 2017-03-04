const logger = {
    patchAction: (action) => action.do( ({type, payload}) => {
        console.group(type);
        console.log("payload", payload);
    }),
    patchState: (state) => state.do( (x) => {
        console.log("state", x.toJS());
        console.groupEnd();
    }),
};

export default logger;
