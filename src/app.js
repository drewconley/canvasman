import Data from './app-state'
import {draw} from './draw'

const initialState = {
    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 70
};

Data.init(initialState);

Data.mergeState({
    someNewValue: "yay!"
});


//Cache references to canvas and context
var canvas = document.getElementById("js-canvas");
var ctx = canvas.getContext("2d");


var state = Data.getState();
console.log(state);

draw( canvas, ctx, state )
