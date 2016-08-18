import {mergeBullet} from '../action-creators'
import makeId from '../helpers/make-id'
import { getRandomInRange } from '../helpers/numbers-helper'
import { randomFromArray } from '../helpers/random-from-array'
import Data from '../app-state'

export function createBulletIntervals(state) {

    const bulletSchema = {
        x: 0,
        y: 0,
        direction: "left",
        speed: 4
    };

    setInterval(() => {


        let state = Data.getState(); //interval was using the original one only?

        const bulletY = getRandomInRange(0, state.canvasHeight);

        if (Object.keys(state.bullets).length < 11) {

            mergeBullet(makeId("bullet"), {
                ...bulletSchema,
                x: 400,
                y: bulletY
            })
        }

    }, randomFromArray([100,200,300,400]) )
}