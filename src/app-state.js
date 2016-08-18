export default {
    state: {},

    init(initialState) {
        this.state = {...initialState}
    },

    getState() {
        const copy = {...this.state};
        return {
            ...copy
        }
    },

    mergeState(newValues={}) {
        this.state = {
            ...this.state,
            ...newValues
        };
    },

    mergeNodeInCollection(collectionName="", nodeId="", newValues={}) {
        var newState = { ...this.state };
        var collection = {...this.state[collectionName]}
        var newNode = {
            ...collection[nodeId],
            ...newValues
        };
        collection[nodeId] = {...newNode}
        newState[collectionName] = {...collection}

        this.state = {
            ...newState
        }
    }

};