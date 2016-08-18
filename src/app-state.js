import {draw} from './draw'

export default {
    state: {},
    
    init(initialState, canvas, ctx) {
        this.state = {...initialState}
        draw(canvas, ctx, this.state)
    },

    getState() {
        return {...this.state}
    },

    mergeState(newValues={}, canvas, ctx) {
        this.state = {
            ...this.state,
            ...newValues
        };

        draw(canvas, ctx, this.state)
    }

};