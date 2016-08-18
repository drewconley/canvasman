import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'

export function playerMovement(state, frameCount) {

    if (state.isKeyboardLeftPressed) {

        const newX = state.characterX - 3;
        mergeState({
            characterX: newX > 0 ? newX : 0,
            isFacingLeft: true,
        })
    }

    if (state.isKeyboardRightPressed) {

        const newX = state.characterX + 3;
        mergeState({
            characterX: newX < (400 - 32) ? newX : 400-32,
            isFacingLeft: false
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
    const isLeft = state.isFacingLeft;

    if (state.isKeyboardLeftPressed || state.isKeyboardRightPressed) {
        return isLeft ? MegaManPoses.Left_Run : MegaManPoses.Run;
    }

    return isLeft ? MegaManPoses.Left_Stand : MegaManPoses.Stand;
}
