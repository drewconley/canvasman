import Data from './app-state'

export function mergeState(newValues={}) {
    Data.mergeState(newValues)
}

export function mergeBullet(id="", newValues={}) {
    Data.mergeNodeInCollection("bullets", id, {...newValues})
}
export function removeBullet(id="") {
    Data.removeNodeInCollection("bullets", id)
}
