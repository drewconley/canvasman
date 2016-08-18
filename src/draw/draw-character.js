
export function drawCharacter(ctx, state, assets) {
    const characterWidth = 32;
    const characterHeight = 32;

    ctx.beginPath();
    ctx.fillStyle = "#fff";

    ctx.fillRect(
        state.characterX, state.characterY,
        characterWidth, characterHeight
    );

    //const currentPose = MegaManPoses.StepOff;
    const currentPose = state.characterPose;
    const activeFrame = currentPose[state.characterFrame] || currentPose[0];


    ctx.drawImage(
        assets.mm,
        activeFrame[0], activeFrame[1], //Where in the spritesheet x/y
        characterWidth,characterWidth,
        state.characterX, state.characterY,
        characterWidth,characterWidth
    );

}