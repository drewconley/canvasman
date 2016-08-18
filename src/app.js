import Data from './app-state'
import initialState from './initial-state'
import {draw} from './draw'
import runSteps from './steps/steps'
import runInits from './inits/inits'

//Cache references to canvas and context
var canvas = document.getElementById("js-canvas");
var ctx = canvas.getContext("2d");

//Init the app. (Does the first draw)
Data.init(initialState, canvas, ctx);

const state = Data.getState();







let assets = {
    mm: new Image()
};

assets.mm.src = `/images/mm-blue-sprites.png?v=${Date.now()}`;



/* Draw Loop */
var frameCount=1;
var step = function() {

    const state = Data.getState();

    //Draw the scene
    draw(canvas, ctx, state, assets);

    //Run Steps
    runSteps(state, frameCount);

    //Track frame count for character animations
    frameCount += 1;
    if (frameCount > 64) { frameCount = 1}

    // //BULLET
    // const currentX = Data.getState().bulletX;
    // const newX = (currentX < 0) ? 400 : currentX - 4;
    //
    // Data.mergeState({
    //     bulletX: newX
    // });



    requestAnimationFrame(step)
};

assets.mm.onload = function() {
    /* Inits */
    runInits(state);
    requestAnimationFrame(step);
}
