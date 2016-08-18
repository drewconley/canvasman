export function draw(canvas, ctx, state) {
    drawSky(ctx, state);
    drawCharacter(ctx, state);
}


function drawSky(ctx, state) {
    ctx.beginPath();
    ctx.fillStyle = "#4AB5E2";
    ctx.fillRect(0,0, state.canvasWidth, state.canvasHeight);
}

function drawCharacter(ctx, state) {
    ctx.beginPath();
    ctx.fillStyle = "#fff";

    const characterWidth = 30;
    const characterHeight = 30;

    ctx.fillRect(
        state.characterX, state.characterY,
        characterWidth, characterHeight
    );
}