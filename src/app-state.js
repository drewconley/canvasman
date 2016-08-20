export default {
    state: {},
    prevState: {},


    init(initialState) {
        this.state = {...initialState}
        this.prevState = {...initialState}
    },

    getState() {
        const copy = {...this.state};
        return {
            ...copy
        }
    },

    getPrevState() {
        const copy = {...this.prevState};
        return {
            ...copy
        }
    },



    mergeState(newValues={}) {

        this.prevState = { ...this.state }

        this.state = {
            ...this.state,
            ...newValues
        };
    },

    mergeNodeInCollection(collectionName="", nodeId="", newValues={}) {

        this.prevState = { ...this.state }

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
    },

    removeNodeInCollection(collectionName="", nodeId="") {

        this.prevState = { ...this.state }

        var newState = { ...this.state };
        var collection = {...this.state[collectionName]}

        delete collection[nodeId];

        newState[collectionName] = {...collection}



        this.state = {
            ...newState
        }
    }



};