import {createBulletIntervals} from './create-bullet-interval'

export default function inits(state) {
    /* Run all of the "kickoff" processses, like keyboard bindings and intervals */
    createBulletIntervals(state);
}