import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'

export function playerMovement(state, frameCount, dt) {

    //console.log(dt)


    if (state.isKeyboardLeftPressed) {

        const newX = Math.round( state.characterX - (90 * dt) );
        mergeState({
            characterX: newX > 0 ? newX : 0,
            isFacingLeft: true,
        })
    }

    if (state.isKeyboardRightPressed) {

        const newX = Math.round( state.characterX + (90 * dt) );
        mergeState({
            characterX: newX < (400 - 32) ? newX : 400-32,
            isFacingLeft: false
        })
    }


    //Update character pose
    mergeState({
        characterPose: getCharacterPose(state)
    });


    //Vertical Boosting
    let characterY = state.characterY;
    if (state.verticalBoost < 0) {
        const unit = 8;
        characterY -= unit;
        mergeState({
            verticalBoost: state.verticalBoost + unit,
            characterY: characterY
        })
    }

    //Fall
    if (isCharacterFalling(state)) {

        characterY += 4;
        mergeState({
            characterY: characterY
        })
    }



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

    if (isCharacterFalling(state)) {
        return isLeft ? MegaManPoses.Left_Jump : MegaManPoses.Jump;
    }

    if (state.isKeyboardLeftPressed || state.isKeyboardRightPressed) {
        return isLeft ? MegaManPoses.Left_Run : MegaManPoses.Run;
    }

    return isLeft ? MegaManPoses.Left_Stand : MegaManPoses.Stand;
}

function isCharacterFalling(state) {
    return state.characterY < 300-32; //Meh, this will check for floors?
}