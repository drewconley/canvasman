import {mergeBullet, removeBullet} from '../action-creators'

export function bulletSteps(state) {

    const bullets = state.bullets;

    for (var id in bullets) {

        const model = bullets[id];
        const currentX = model.x;


        //Update going left
        if (currentX > -30) {
            mergeBullet(id, {
                x: currentX - model.speed
            })
        } else {
            /* Remove my node */
            removeBullet(id);
        }


        /* Check for collisions */
        if (
            model.x+10 > state.characterX && model.x <= state.characterX+30 &&
            model.y+10 > state.characterY && model.y <= state.characterY+30
        ) {
            removeBullet(id);
        }



    }
}