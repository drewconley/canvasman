import {drawCharacter} from './draw-character'
import {drawWalls} from './draw-walls'

export function draw(canvas, ctx, state, assets) {
    drawSky(ctx, state);
    drawWalls(ctx, state);


    drawCharacter(ctx, state, assets);
    drawBullets(ctx, state);

}


function drawSky(ctx, state) {
    ctx.beginPath();
    ctx.fillStyle = "#4AB5E2";
    ctx.fillRect(0,0, state.canvasWidth, state.canvasHeight);
}



function drawBullets(ctx, state) {


        // ctx.beginPath();
        // ctx.fillStyle = "yellow";
        // ctx.fillRect(state.bulletX, state.bulletY, 10, 10);

    const bullets = state.bullets;
    for (var id in bullets) {
        const model = bullets[id];

        //Draw the bullet
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(model.x, model.y, 10, 10);
    }
}

/*
 ctx.drawImage(image,
 10, 10,   // Start at 10 pixels from the left and the top of the image (crop),
 80, 30,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
 0, 0,     // Place the result at 0, 0 in the canvas,
 160, 60); // With as width / height: 160 * 60 (scale)
 //Thank you, person from Stack Overflow
 */