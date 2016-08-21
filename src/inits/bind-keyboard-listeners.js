import Data from '../app-state'
import {mergeState} from '../action-creators'

export function bindKeyboardListeners() {

    var jumpSafe = true;
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

        //Jump!
        if (e.which == 38) {

            if ( Data.getState().isAbleToJump ) {
                if (jumpSafe) {
                    jumpSafe = false;
                    mergeState({
                        isAbleToJump: false,
                        verticalBoost: -170
                    });
                }
            }
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

        //Release Jump!
        if (e.which == 38) {
            jumpSafe = true;
            mergeState({
                verticalBoost: 0
            });
        }
    }, false);


}