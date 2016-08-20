export default {

    counter: 0,

    canvasWidth: 400,
    canvasHeight: 300,

    characterX: 80,
    characterY: 7,
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
            x: 5,
            y: 260,
            height: 32,
            width: 330
        },

        {
            _id: "wall2",
            x: 280,
            y: 215,
            height: 40,
            width: 150
        },

        {
            _id: "wall3",
            x: 170,
            y: 200,
            height: 50,
            width: 32
        },

        {
            _id: "wall4",
            x: 0,
            y: 210,
            height: 50,
            width: 32
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