const logger = {
    patchAction: (action) => action.do( ({type, payload}) => {
        console.log(`[${type}]`, payload);
    }),
    patchState: (state) => state.do( (x) => {
        console.log(x.toJS());
    }),
};

export default logger;
