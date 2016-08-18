export default {
    state: {},
    init(initialState) {
        this.state = {...initialState}
    },

    getState() {
        return {...this.state}
    },

    mergeState(newValues={}) {
        this.state = {
            ...this.state,
            ...newValues
        };

        //Draw ?
    }

};