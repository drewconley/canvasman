import {mergeState} from '../action-creators'
import MegaManPoses from '../sprite-measurements/megaman-measurement'
import {getSolidSurface, getSolidSurfaceDown} from '../helpers/collision-helpers'

export function playerMovement(state, prevState, frameCount, dt) {



    let nextCharacterX = state.characterX;
    let nextCharacterY = state.characterY;


    //Attempt to make adjustments

    // Check the theoretical situation of new X or Y value
    // If the new situation does NOT have any collision, the new value is okay.
    // Otherwise, use the original value //Then we will talk about re-adjusting based on collis.

    const downUnit = 5;  //should be something liek (10 * dt);

    const nextDownFrame = {
        x: nextCharacterX,
        y: nextCharacterY + (downUnit),
        width: state.characterWidth,
        height: state.characterHeight
    };

    const surface = getSolidSurface(nextDownFrame, state.walls);

    if (!surface) {
        nextCharacterY += downUnit
    }









    if (state.isKeyboardLeftPressed) {
        const leftUnit = 3;
        const nextLeftFrame = {
            x: nextCharacterX - leftUnit,
            y: nextCharacterY,
            width: state.characterWidth,
            height: state.characterHeight
        };
        const leftSurface = getSolidSurface(nextLeftFrame, state.walls);
        if (!leftSurface) {
            nextCharacterX -= leftUnit;
        }

    }

    if (state.isKeyboardRightPressed) {
        const rightUnit = 3;
        const nextRightFrame = {
            x: nextCharacterX + rightUnit,
            y: nextCharacterY,
            width: state.characterWidth,
            height: state.characterHeight
        };
        const rightSurface = getSolidSurface(nextRightFrame, state.walls);
        if (!rightSurface) {
            nextCharacterX += rightUnit;
        }
    }
    ///////////////////////////////////

    let verticalBoost = state.verticalBoost;
    /* VERTICAL BOOST */
    if (verticalBoost < 0) {
        const unit = 9;
        const nextUpY = nextCharacterY -= unit;

        //CHECK FOR CEILINGS
        const nextUpFrame = {
            x: nextCharacterX,
            y: nextUpY,
            width: state.characterWidth,
            height: state.characterHeight
        };

        const surfaceUp = getSolidSurface(nextUpFrame, state.walls);

        if (!surfaceUp) {
            nextCharacterY = nextUpY;

            //move boost back towards 0
            verticalBoost = state.verticalBoost + unit;

        } else {
            verticalBoost = 0; //Kill the boost. Hit your head 
        }


    }

    ////ANIMATION
    ////Change active frame
    //let nextFrame = state.characterFrame;
    //if (frameCount % 8 == 0) {
    //    nextFrame = (nextFrame <= 2) ? nextFrame + 1 : 0;
    //}



    //Revive!
    if (nextCharacterY > 332) {
        nextCharacterY = -32
    }


    /* Merge all state changes */
    mergeState({
        //characterFrame: nextFrame,
        //characterPose: getCharacterPose(state), //Sprite

        characterX: nextCharacterX,
        characterY: nextCharacterY,

        verticalBoost: verticalBoost,
        //isFacingLeft: isFacingLeft,
        //isAbleToJump: Boolean(surface)
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