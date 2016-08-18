import {mergeBullet} from '../action-creators'
import makeId from '../helpers/make-id'
import { getRandomInRange } from '../helpers/numbers-helper'
import { randomFromArray } from '../helpers/random-from-array'

export function createBulletIntervals(state) {

    const bulletSchema = {
        x: 0,
        y: 0,
        direction: "left",
        speed: 4
    };

    setInterval(() => {

        console.log(state.canvasHeight)

        const bulletY = getRandomInRange(0, state.canvasHeight);
        console.log(bulletY)

        mergeBullet( makeId("bullet"), {
            ...bulletSchema,
            x: 400,
            y: bulletY
        })

    }, randomFromArray([100,200,300,400]) )
}