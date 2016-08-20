import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'
import {getSolidSurface} from '../helpers/collision-helpers'

export function playerMovement(state, prevState, frameCount, dt) {



    //Movement /////////////////////////////////////////////
    let characterX = state.characterX;
    let isFacingLeft = state.isFacingLeft;


    if (state.isKeyboardLeftPressed) {
        characterX = Math.round( characterX - (110 * dt) );
        isFacingLeft = true;
    }

    if (state.isKeyboardRightPressed) {
        characterX = Math.round( characterX + (110 * dt) );
        isFacingLeft = false;
    }
    ///////////////////////////////////





    var characterY = state.characterY;

    /* VERTICAL BOOST */
    if (state.verticalBoost < 0) {
        const unit = 8;
        characterY -= unit;
        mergeState({
            verticalBoost: state.verticalBoost + unit
        })
    }





    const surface = getStandingSurface(state);
    //console.log(state.characterY, prevState.characterY, surface)

    if (state.characterY == prevState.characterY) {
        //console.log('no update')
    } else {
        //console.log('success')
    }



    /* EVENT: LANDING */
    if (surface && !getStandingSurface(prevState)) {
        console.log('LANDING!');
        window.landingSfx.play();
        characterY = surface.y - 32;
    }

    if (!surface) {
        //Fall

        characterY += 4;


        if (characterY > 300 + 50) {
            console.log('warp to top')
            characterY = -50
        }
    }




    //ANIMATION
    //Change active frame
    let nextFrame = state.characterFrame;
    if (frameCount % 8 == 0) {
        nextFrame = (nextFrame <= 2) ? nextFrame + 1 : 0;
    }






    /* Merge all state changes */
    mergeState({
        characterFrame: nextFrame,
        characterPose: getCharacterPose(state), //Sprite

        characterX: characterX,
        characterY: characterY,

        isFacingLeft: isFacingLeft,
        isAbleToJump: Boolean(surface)

    });


}

////////////////////////////////////////////////////

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

    const characterModel = {
        x: state.characterX,
        y: state.characterY,
        width: 32,
        height: 32
    };
    return getSolidSurface(characterModel, state.walls); //returns a model or `null`
}