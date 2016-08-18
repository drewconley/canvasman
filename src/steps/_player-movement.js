import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'

export function playerMovement(state, frameCount) {

    if (state.isKeyboardUpPressed) {

        const newY = state.characterY - 6;
        mergeState({
            characterY: newY > 0 ? newY : 0,
        })
    }

    if (state.isKeyboardDownPressed) {

        const newY = state.characterY + 6;
        mergeState({
            characterY: newY < (300 - 30) ? newY : 300-30
        })
    }


    //Update character pose
    mergeState({
        characterPose: getCharacterPose(state)
    });


    //Change active frame
    if (frameCount % 8 == 0) {
        const nextFrame = (state.characterFrame <= 2) ? state.characterFrame + 1 : 0;
        mergeState({
            characterFrame: nextFrame
        })
    }

}

function getCharacterPose(state) {
    if (state.isKeyboardDownPressed || state.isKeyboardUpPressed) {
        return MegaManPoses.Jump
    }

    return MegaManPoses.Stand
}
