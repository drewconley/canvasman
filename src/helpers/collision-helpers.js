export function isTouching(my,other) {
    return my.x + my.width > other.x &&
        my.x <= other.x + other.width &&
        my.y + my.height > other.y &&
        my.y <= other.y + other.height;
}

export function getSolidSurface(my, others=[]) {

    //Create 1 px sliver as my underline;

    const underlineModel = {
        height:1,
        width: my.width,
        y: my.y + my.height,
        x: my.x
    };

    var touchingModel = null; //Assume False
    others.forEach(otherModel => {

        if (touchingModel) {
            return; //Dont rerun if we already have a match
        }

        if (isTouching( underlineModel, otherModel)) {
            touchingModel = {...otherModel};
        }
    });

    return touchingModel;
}