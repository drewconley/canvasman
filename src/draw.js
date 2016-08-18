export function draw(canvas, ctx, state) {
    drawSky(ctx, state);
    drawCharacter(ctx, state);
    drawBullets(ctx, state);
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