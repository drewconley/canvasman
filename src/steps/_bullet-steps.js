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
            removeBullet(id)

        }



    }
}