import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'
import {getSolidSurface, getSolidSurfaceToRight, getSolidSurfaceToLeft} from '../helpers/collision-helpers'

export function playerMovement(state, prevState, frameCount, dt) {



    //Movement /////////////////////////////////////////////
    let characterX = state.characterX;
    let isFacingLeft = state.isFacingLeft;

    const leftWall = getLeftWall(state);



    if (state.isKeyboardLeftPressed) {



        if (!leftWall) {
            characterX = Math.round(characterX - (110 * dt));
        } else {
            //characterX = leftWall.x + leftWall.width;
        }
        isFacingLeft = true;
    }

    if (state.isKeyboardRightPressed) {

        if (!getRightWall(state)) {
            characterX = Math.round(characterX + (110 * dt));
        }

        isFacingLeft = false;
    }
    ///////////////////////////////////





    var characterY = state.characterY;

    let verticalBoost = state.verticalBoost;
    /* VERTICAL BOOST */
    if (state.verticalBoost < 0) {
        const unit = 9;
        characterY -= unit;
        verticalBoost = state.verticalBoost + unit;
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

        characterY += 5;


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



    //console.log( getRightWall(state) )



    /* Merge all state changes */
    mergeState({
        characterFrame: nextFrame,
        characterPose: getCharacterPose(state), //Sprite

        characterX: characterX,
        characterY: characterY,

        verticalBoost: verticalBoost,
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

function getRightWall(state) {

    const characterModel = {
        x: state.characterX,
        y: state.characterY,
        width: 32,
        height: 32
    };
    return getSolidSurfaceToRight(characterModel, state.walls); //returns a model or `null`
}
function getLeftWall(state) {

    const characterModel = {
        x: state.characterX,
        y: state.characterY,
        width: 32,
        height: 32
    };
    return getSolidSurfaceToLeft(characterModel, state.walls); //returns a model or `null`
}