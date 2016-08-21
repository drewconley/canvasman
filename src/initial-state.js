export default {

    counter: 0,

    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 0,
    characterWidth: 32,
    characterHeight: 32,

    characterFrame: 0,
    characterPose: [ [0,0] ],
    isAbleToJump: false,
    isFacingLeft: true, //default is Right

    //Jumping
    verticalBoost: 0,

    //Keyboard
    isKeyboardLeftPressed: false,
    isKeyboardRightPressed: false,


    walls: [
        {
            _id: "wall1",
            x: 0,
            y: 0,
            height: 32 * 20,
            width: 16
        },

        {
            _id: "wall2",
            x: 400-16,
            y: 0,
            height: 32 * 20,
            width: 16
        },

        {
            _id: "wall3",
            x: 16,
            y: 300-32,
            height: 16,
            width: 16 * 10
        },

        {
            _id: "wall4",
            x: 16*10,
            y: 210,
            height: 32,
            width: 32*2
        },
        {
            _id: "wall5",
            x: 16*14,
            y: 210-32,
            height: 32,
            width: 32*2
        },
        {
            _id: "wall5",
            x: 16,
            y: 300-(32*4),
            height: 16,
            width: 16 * 5
        }
    ],



    bullets: {
        // a: {
        //     x: 380,
        //     y: 200,
        //     direction: "left",
        //     speed: 4
        // },
        // b: {
        //     x: 420,
        //     y: 20,
        //     direction: "left",
        //     speed: 5
        // },
        // c: {
        //     x: 280,
        //     y: 100,
        //     direction: "left",
        //     speed: 4
        // },
        // d: {
        //     x: 380,
        //     y: 280,
        //     direction: "left",
        //     speed: 4
        // }
    }

}