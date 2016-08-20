import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'
import {getSolidSurface} from '../helpers/collision-helpers'

export function playerMovement(state, prevState, frameCount, dt) {



    //Movement
    if (state.isKeyboardLeftPressed) {

        const newX = Math.round( state.characterX - (110 * dt) );
        mergeState({
            characterX: newX > 0 ? newX : 0,
            isFacingLeft: true,
        })
    }

    if (state.isKeyboardRightPressed) {

        const newX = Math.round( state.characterX + (110 * dt) );
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


    const surface = getStandingSurface(state);

    //console.log(surface, getStandingSurface(prevState))


    if (surface) {

    } else {

        //Fall
        characterY += 4;
        if (characterY > 300 + 50) {
            characterY = -50
        }
    }

    /* EVENT: LANDING */
    if (surface && !getStandingSurface(prevState)) {
        console.log('LANDING!');
        console.log(surface.y)

        characterY = surface.y - 32;
    }

    mergeState({
        characterY: characterY
    });







    //ANIMATION
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

    const isStanding = Boolean( getStandingSurface(state) );


    if (!isStanding) {
        return isLeft ? MegaManPoses.Left_Jump : MegaManPoses.Jump;
    }

    if (state.isKeyboardLeftPressed || state.isKeyboardRightPressed) {
        return isLeft ? MegaManPoses.Left_Run : MegaManPoses.Run;
    }

    return isLeft ? MegaManPoses.Left_Stand : MegaManPoses.Stand;
}

function getStandingSurface(state) {
    //return state.characterY < 300-32; //Meh, this will check for floors?

    const characterModel = {
        x: state.characterX,
        y: state.characterY,
        width: 32,
        height: 32
    };


    return getSolidSurface(characterModel, state.walls); //returns a model or `null`

}