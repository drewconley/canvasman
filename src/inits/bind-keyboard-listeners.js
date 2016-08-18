import Data from '../app-state'
import {mergeState} from '../action-creators'

export function bindKeyboardListeners() {

    document.addEventListener('keydown', function (e) {
        if (e.which == 37) {
            mergeState({
                isKeyboardLeftPressed: true
            });
        }
        if (e.which == 39) {
            mergeState({
                isKeyboardRightPressed: true
            });
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (e.which == 37) {
            mergeState({
                isKeyboardLeftPressed: false
            });
        }
        if (e.which == 39) {
            mergeState({
                isKeyboardRightPressed: false
            });
        }
    }, false);

}