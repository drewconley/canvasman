import Data from './app-state'



//Cache references to canvas and context
var canvas = document.getElementById("js-canvas");
var ctx = canvas.getContext("2d");

//Set up App State
const initialState = {
    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 70
};

//Init the app. (Does the first draw)
Data.init(initialState, canvas, ctx);

//Loop for testing
var step = function() {
    const currentY = Data.getState().characterY;
    const newY = (currentY < 300) ? currentY + 2 : -30;

    Data.mergeState({
        characterY: newY
    }, canvas, ctx);

    requestAnimationFrame(step)

};

//requestAnimationFrame(step)

