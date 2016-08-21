
export function drawCharacter(ctx, state, assets) {
    const characterWidth = state.characterWidth;
    const characterHeight = state.characterHeight;

    ctx.beginPath();

    /* Debug Rectangle */ /* This is the hitbox */
     //ctx.fillStyle = "#fff";
     //ctx.fillRect(
     //    state.characterX, state.characterY,
     //    characterWidth, characterHeight
     //);

    const currentPose = state.characterPose;
    const activeFrame = currentPose[state.characterFrame] || currentPose[0];



    ctx.drawImage(
        assets.mm,
        activeFrame[0], activeFrame[1], //Where in the spritesheet x/y
        32,32,
        state.characterX - 5, state.characterY - 4, //nudging where the drawing of the sprite is
        32,32
    );


}

/*
 ctx.drawImage(image,
 10, 10,   // Start at 10 pixels from the left and the top of the image (crop),
 80, 30,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
 0, 0,     // Place the result at 0, 0 in the canvas,
 160, 60); // With as width / height: 160 * 60 (scale)
 //Thank you, person from Stack Overflow
 */