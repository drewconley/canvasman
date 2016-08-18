import Data from '../app-state'
import {mergeState} from '../action-creators'

export function bindKeyboardListeners() {

    document.addEventListener('keydown', function (e) {
        if (e.which == 38) {
            mergeState({
                isKeyboardUpPressed: true
            });
        }
        if (e.which == 40) {
            mergeState({
                isKeyboardDownPressed: true
            });
        }
    }, false);

    document.addEventListener('keyup', function (e) {
        if (e.which == 38) {
            mergeState({
                isKeyboardUpPressed: false
            });
        }
        if (e.which == 40) {
            mergeState({
                isKeyboardDownPressed: false
            });
        }
    }, false);

}