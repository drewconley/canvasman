import {createBulletIntervals} from './create-bullet-interval'
import {bindKeyboardListeners} from './bind-keyboard-listeners'

export default function inits(state) {
    /* Run all of the "kickoff" processses, like keyboard bindings and intervals */
    bindKeyboardListeners();

    createBulletIntervals(state);
}