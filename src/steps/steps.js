//Repository of all Step events that need to happen.
//Motion, etc.
import {bulletSteps} from './_bullet-steps'
import {playerMovement} from './_player-movement'

export default function(state, prevState, frameCount, dt) {

    //bulletSteps(state);
    playerMovement(state, prevState, frameCount, dt);
}

/* Character steps update was this: */
/*
 //State updates
 const currentY = Data.getState().characterY;
 const newY = (currentY < 300) ? currentY + 2 : -30;

 Data.mergeState({
 characterY: newY
 });
 */