import {mergeBullet} from '../action-creators'
import makeId from '../helpers/make-id'

export function createBulletIntervals() {

    const bulletSchema = {
        x: 0,
        y: 0,
        direction: "left",
        speed: 4
    };

    setInterval(() => {

        console.log('asd')
        mergeBullet( makeId("bullet"), {
            ...bulletSchema,
            x: 400,
            y: 20
        })

    }, 600)
}