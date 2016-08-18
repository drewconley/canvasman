import {mergeBullet} from '../action-creators'

export function bulletSteps(state) {

    const bullets = state.bullets;

    for (var id in bullets) {

        const model = bullets[id];
        const currentX = model.x;
        const newX = (currentX > 0) ? currentX - model.speed : currentX;

        mergeBullet(id, {
            x: newX
        })


    }
}