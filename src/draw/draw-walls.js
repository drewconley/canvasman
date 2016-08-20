export function drawWalls(ctx, state) {

    state.walls.forEach(wall => {
        ctx.beginPath();
        ctx.fillStyle = "#222";
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });

}