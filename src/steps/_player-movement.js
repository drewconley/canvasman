import {mergeState} from '../action-creators'

export function playerMovement(state) {

    if (state.isKeyboardUpPressed) {

        const newY = state.characterY - 6;
        mergeState({
            characterY: newY > 0 ? newY : 0
        })
    }

    if (state.isKeyboardDownPressed) {

        const newY = state.characterY + 6;
        mergeState({
            characterY: newY < (300 - 30) ? newY : 300-30
        })
    }

}
