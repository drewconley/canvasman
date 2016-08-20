import Data from './app-state'
import initialState from './initial-state'
import {draw} from './draw/draw'
import runSteps from './steps/steps'
import runInits from './inits/inits'

//Cache references to canvas and context
var canvas = document.getElementById("js-canvas");
var ctx = canvas.getContext("2d");

//Init the app
Data.init(initialState, canvas, ctx);



//Set up assets
let assets = {
    mm: new Image()
};

assets.mm.src = `/images/mm-blue-sprites.png?v=${Date.now()}`;



/* Draw Loop */
var frameCount=1;
var lastTime;
var step = function() {

    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;


    const state = Data.getState();
    const prevState = Data.getPrevState();

    //Run Steps
    runSteps(state, prevState, frameCount, dt);


    //Draw the scene
    draw(canvas, ctx, state, assets);


    //Track frame count for character animations
    frameCount += 1;
    if (frameCount > 64) { frameCount = 1}

    lastTime = now;
    requestAnimationFrame(step)
};


/* SFX */
window.landingSfx = new Howl({
    src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/06_-_MegamanLand.wav'],
    volume: 0.5
});









assets.mm.onload = function() {

    const state = Data.getState();

    /* Inits */
    runInits(state);
    requestAnimationFrame(step);
};
